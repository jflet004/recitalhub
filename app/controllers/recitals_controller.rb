class RecitalsController < ApplicationController

  def index
    recitals = Recital.all
    render json: recitals, status: :ok
  end

  def show
    recital = Recital.find_by(id: params[:id])
    render json: recital
  end

end
