class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  def create_geojson
    @locations = Location.all
    @geojson = Array.new

    @locations.each do |location|
      @geojson << {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [location.longitude, location.latitude]
        },
        properties: {
          name: location.name,
          address: location.street,
          :'marker-color' => '#00607d',
          :'marker-symbol' => 'circle',
          :'marker-size' => 'medium'
        }
      }

      respond_to do |format|
        format.html
        format.json { render json: @geojson }  # respond with the created JSON object
      end
    end
  end

  # GET /locations
  # GET /locations.json
  def index
    if params[:search].present?
      @locations = Location.near(params[:search], 50, :order => "distance")
    else
      @locations = Location.all
    end
  end

  # GET /locations/1
  # GET /locations/1.json
  def show
    @user     = current_user
    @project  = @user.projects.find(params[:project_id])
    @location = @project.locations.find(params[:id])
  end

  # GET /locations/new
  def new
    @user     = current_user
    @project  = @user.projects.find(params[:project_id])
    @location = @project.locations.new
  end

  # GET /locations/1/edit
  def edit
    @user     = current_user
    @project  = @user.projects.find(params[:project_id])
    @location = @project.locations.find(params[:id])
  end

  # POST /locations
  # POST /locations.json
  def create
    @user     = current_user
    @project  = @user.projects.find(params[:project_id])
    @location = @project.locations.new(location_params)

    respond_to do |format|
      if @location.save
        format.html { redirect_to [@project, @location], notice: 'Location was successfully created.' }
        format.json { render action: 'show', status: :created, location: @location }
      else
        format.html { render action: 'new' }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /locations/1
  # PATCH/PUT /locations/1.json
  def update
    @user     = current_user
    @project  = @user.projects.find(params[:project_id])
    @location = @project.locations.find(params[:id])

    respond_to do |format|
      if @location.update_attributes(location_params)
        format.html { redirect_to [@project, @location], notice: 'Location was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locations/1
  # DELETE /locations/1.json
  def destroy
    @user     = current_user
    @project  = @user.projects.find(params[:project_id])
    @location = @project.locations.find(params[:id])
    @location.destroy
    respond_to do |format|
      format.html { redirect_to project_locations_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @user     = current_user
      @project  = @user.projects.find(params[:project_id])
      @location = @project.locations.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def location_params
      params.require(:location).permit(:address, :latitude, :longitude)
    end
end
