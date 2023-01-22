class RecitalsController < ApplicationController

  def index
    recitals = Recital.all
    render json: rectials
  end

end
