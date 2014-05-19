class PagesController < ApplicationController
  def home
    if user_signed_in?
      redirect_to users_show_path
    end
  end

  def about
  end

  def contact
  end

  def download
  end

  def map_high
  end
end
