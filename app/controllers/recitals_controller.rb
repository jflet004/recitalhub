class RecitalsController < ApplicationController

  def index
    recitals = Recital.all
    render json: recitals, status: :ok
  end

end
