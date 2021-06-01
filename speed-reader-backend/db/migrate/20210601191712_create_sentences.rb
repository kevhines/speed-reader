class CreateSentences < ActiveRecord::Migration[6.1]
  def change
    create_table :sentences do |t|
      t.string :content
      t.string :difficulty
      t.boolean :good, default: true

      t.timestamps
    end
  end
end
