class SentencesController < ApplicationController

    def index
        sentences = Sentence.allow
        render jason: sentences
    end
    
end
