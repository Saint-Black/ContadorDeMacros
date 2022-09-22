from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

from config import config

app = Flask(__name__)

connection = MySQL(app)

@app.route('/foods', methods=['GET'])
def list_food():
  try:
    cursor = connection.connection.cursor()
    sql = "SELECT * FROM food"
    cursor.execute(sql)
    data = cursor.fetchall()
    foods = []
    for i in data:
      food = {'id': i[0], 'name': i[1], 'protein': i[2], 'calorie': i[3], 'grease': i[4], 'carbohydrates': i[5]}
      foods.append(food)
    return jsonify({'foods': foods})
  except Exception as ex:
    return not_found()
  
@app.route('/foods/<id>', methods=['GET'])
def get_food(id):
  try:
    cursor = connection.connection.cursor()
    sql = "SELECT * FROM food WHERE id = {0}".format(id)
    cursor.execute(sql)
    data = cursor.fetchone()
    if data != None:
      food = {'id': data[0], 'name': data[1], 'protein': data[2], 'calorie': data[3], 'grease': data[4], 'carbohydrates': data[5]}
      return jsonify({'food': food})
    else:
      return not_found()
  except Exception as ex:
    return not_found()

@app.route('/foods', methods=['POST'])
def create_food():
  try:
    cursor = connection.connection.cursor()
    sql = """INSERT INTO food(name, protein, calorie, grease, carbohydrates) 
          VALUES ('{0}', {1}, {2}, {3}, {4})""".format(
            request.json['name'], request.json['protein'], request.json['calorie'], request.json['grease'], request.json['carbohydrates']
          )
    cursor.execute(sql)
    connection.connection.commit()
    return jsonify({'message': 'Food successfully saved'})
  except Exception as ex:
    return not_found()

@app.route('/foods/<id>', methods=['DELETE'])
def delete_food(id):
  try:
    cursor = connection.connection.cursor()
    sql = "DELETE FROM food WHERE id = {0}".format(id)
    cursor.execute(sql)
    connection.connection.commit()
    return jsonify({'message': 'Food successfully deleted'})
  except Exception as ex:
    return not_found()
  
@app.route('/foods/<id>', methods=['PUT'])
def update_food(id):
  try:
    cursor = connection.connection.cursor()
    sql = "UPDATE food SET name = {0}, protein = {1}, calorie = {2}, grease = {3}, carbohydrates = {4} WHERE id = {5}".format(
            request.json['name'], request.json['protein'], request.json['calorie'], request.json['grease'], request.json['carbohydrates'], id
          )
    cursor.execute(sql)
    connection.connection.commit()
    return jsonify({'message': 'Food successfully updated'})
  except Exception as ex:
    print(ex.__str__)
    return not_found()

@app.errorhandler(404)
def not_found(error=None):
  response = jsonify({
      'message': 'Resource not found',
      'status': 404
    })
  response.status_code = 404
  return response

if __name__ == '__main__':
  app.config.from_object(config['development'])
  app.register_error_handler(404, not_found)
  app.run(debug=True)