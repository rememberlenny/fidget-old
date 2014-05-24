class GraffitisController < ApplicationController
  before_action :set_graffiti, only: [:show, :edit, :update, :destroy]

  # GET /graffitis
  # GET /graffitis.json
  def index
    @graffitis = Graffiti.all
  end

  # GET /graffitis/1
  # GET /graffitis/1.json
  def show
  end

  # GET /graffitis/new
  def new
    @graffiti = Graffiti.new
  end

  # GET /graffitis/1/edit
  def edit
  end

  # POST /graffitis
  # POST /graffitis.json
  def create
    @graffiti = Graffiti.new(graffiti_params)

    respond_to do |format|
      if @graffiti.save
        format.html { redirect_to @graffiti, notice: 'Graffiti was successfully created.' }
        format.json { render action: 'show', status: :created, location: @graffiti }
      else
        format.html { render action: 'new' }
        format.json { render json: @graffiti.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /graffitis/1
  # PATCH/PUT /graffitis/1.json
  def update
    respond_to do |format|
      if @graffiti.update(graffiti_params)
        format.html { redirect_to @graffiti, notice: 'Graffiti was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @graffiti.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /graffitis/1
  # DELETE /graffitis/1.json
  def destroy
    @graffiti.destroy
    respond_to do |format|
      format.html { redirect_to graffitis_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_graffiti
      @graffiti = Graffiti.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def graffiti_params
      params.require(:graffiti).permit(:image_id, :image_url, :user, :source, :date_published, :post_id)
    end
end
