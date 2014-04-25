module PagesHelper

  def body_css
    body_class = params[:controller] + ' ' + params[:action]
    return body_class
  end

end
