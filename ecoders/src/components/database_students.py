import sqlite3
from flask import g

def connect_to_database():
    sql = sqlite3.connect("students.db")
    sql.row_factory = sqlite3.Row
    return sql

def get_database():
    if not hasattr(g, "students_db"):
        g.students_db = connect_to_database()
    return g.students_db