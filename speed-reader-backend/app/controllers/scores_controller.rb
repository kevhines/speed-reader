class ScoresController < ApplicationController

    def create
        score = Score.new(score_params)
        # byebug
        if score.save
            render json: score
        else
            render json: {message: "Score Didn't Save!"}
        end
    end

    
    private
    
    def score_params
        params.require(:score).permit(:user_id, :percent)
    end

end
