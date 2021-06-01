class CreateSentences < ActiveRecord::Migration[6.1]
  def change
    create_table :sentences do |t|
      t.string :content
      t.string :difficutly
      t.boolean :valid

      t.timestamps
    end
  end
end
