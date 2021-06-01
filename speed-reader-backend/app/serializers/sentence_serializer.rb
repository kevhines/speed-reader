class SentenceSerializer < ActiveModel::Serializer
  attributes :id, :content, :difficulty, :good
end
