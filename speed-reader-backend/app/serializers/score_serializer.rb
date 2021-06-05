class ScoreSerializer < ActiveModel::Serializer
  attributes :percent, :created_at

  def created_at
    object.created_at.strftime("%b %d %Y ")
  end

end
