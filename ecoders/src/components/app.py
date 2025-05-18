from flask import Flask, jsonify, request
from flask_cors import CORS
from database_students import get_database
app = Flask(__name__)
CORS(app)

@app.route("/" ,                methods = ["GET"])
@app.route("/showallstudents" , methods = ["GET"])
def showallstudents():
    allstudents = None
    db = get_database()
    student_cursor = db.execute("select * from students")
    allstudents = student_cursor.fetchall()

    final_result = []

    for eachstudent in allstudents:
        student_dict = {}
        student_dict["id"]          =     eachstudent["id"]
        student_dict["first_name"]  =     eachstudent["first_name"]
        student_dict["last_name"]   =     eachstudent["last_name"]
        student_dict["email"]       =     eachstudent["email"]
        student_dict["comments"]    =     eachstudent["comments"]
        final_result.append(student_dict) 
    return jsonify({"data" : final_result})


@app.route("/onestudent/<int:id>" , methods = ["GET"])
def onestudent(id):
    onestudent = None
    db = get_database()
    onestudent_cursor = db.execute("select * from students where id = ?", [id])
    onestudent =onestudent_cursor.fetchone()

    return jsonify({"One Students Fetched -" : 
                    { "id"        : onestudent["id"] ,
                      "first_name"      : onestudent["first_name"], 
                      "last_name"       : onestudent["last_name"], 
                      "email"           : onestudent["email"],
                    "Comments"          : onestudent["comments"]  }
                    })


@app.route("/deletestudents/<int:id>" , methods = ["DELETE"])
def deletestudent(id):
    db = get_database()
    db.execute("delete from students where id = ?" , [id])
    db.commit()
    return jsonify({"Student- " : "Student successfully deleted"})


@app.route("/insertstudent" , methods = ["POST"])
def insertstudent():
    new_student_data  = request.get_json()
    first_name        = new_student_data["first_name"]
    last_name         = new_student_data["last_name"]
    email             = new_student_data["email"]
    comments          = new_student_data["comments"]

    db = get_database()
    db.execute("insert into students (first_name, last_name,  email, comments) values (?,?, ?,?)",[first_name, last_name,  email, comments])
    db.commit()
    return jsonify({"Student - " : "Student successfully inserted."})


@app.route("/updatestudent/<int:id>" , methods = ["PUT"])
def updatestudent(id):
    new_student_data  = request.get_json()
    first_name        = new_student_data["first_name"]
    last_name         = new_student_data["last_name"]
    email             = new_student_data["email"]
    comments          = new_student_data["comments"]

    db = get_database()
    db.execute("update students set first_name = ? , last_name = ?, email =? , comments = ? where id = ?", [first_name, last_name, email, comments, id])
    db.commit()

    return jsonify({"Student - " : "Student successfully updated."})

if __name__ == "__main__":
    app.run(debug = True)