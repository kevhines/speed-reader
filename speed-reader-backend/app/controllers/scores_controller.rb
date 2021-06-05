class ScoresController < ApplicationController

    def create
        score = Score.new(score_params)
        if user.save
            render json: score
        else
            render json: {message: "Score Didn't Save!"}
        end
    end

    
    private
    
    def user_params
        params.require(:score).permit(:user_id, :percent)
    end

end
