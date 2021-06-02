class SentencesController < ApplicationController

    def index
        sentences = Sentence.all
        render json: sentences
    end

    def create
        sentence = Sentence.new(sentence_params)
        if sentence.save
            render json: sentence
        else
            render json: "Create Sentence Failed!"
        end
    
    end

    private

    def sentence_params
        params.require(:sentence).permit(:content)
    end

end
