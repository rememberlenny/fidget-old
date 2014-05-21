class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @user     = User.find(params[:user_id])
    @projects  = @user.projects.all
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @user     = User.find(params[:user_id])
    @project  = @user.projects.find(params[:id])
    @locations = @project.locations.all
  end

  # GET /projects/new
  def new
    @user     = User.find(params[:user_id])
    @project  = @user.projects.new
  end

  # GET /projects/1/edit
  def edit
    @user     = User.find(params[:user_id])
    @project  = @user.projects.find(params[:id])
  end

  # POST /projects
  # POST /projects.json
  def create
    @user     = User.find(params[:user_id])
    @project  = @user.projects.new(project_params)

    respond_to do |format|
      if @project.save
        format.html { redirect_to [@user, @project], notice: 'Project was successfully created.' }
        format.json { render action: 'show', status: :created, location: @project }
      else
        format.html { render action: 'new' }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    @user     = User.find(params[:user_id])
    @project  = @user.projects.find(params[:id])
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to [@user, @project], notice: 'Project was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @user     = User.find(params[:user_id])
    @project  = @user.projects.find(params[:id])
    @project.destroy
    respond_to do |format|
      format.html { redirect_to user_projects_path(@user) }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:name, :user_id)
    end
end
