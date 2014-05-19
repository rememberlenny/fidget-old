class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  protected

  before_filter :configure_devise_params, if: :devise_controller?
    def configure_devise_params
      devise_parameter_sanitizer.for(:account_update) { |u| u.permit( :name, :email, :image, :password, :password_confirmation, :current_password  )}
    end

end
