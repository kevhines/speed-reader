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
            render json: {message: "Sentence Can Not Be Blank!"}
        end
    
    end

    def update
        sentence = Sentence.find_by(id: params[:id])
        if sentence.update(sentence_params)
            render json: sentence
        else
            render json: {message: "Sentence Can Not Be Blank!"}
        end
    
    end

    def destroy
        sentence = Sentence.find_by(id: params[:id])
        sentence.destroy
        render json: sentence
    end

    private

    def sentence_params
        params.require(:sentence).permit(:content, :id)
    end

end
