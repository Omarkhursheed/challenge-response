from flask import Flask, render_template, redirect, url_for, request
from flask_table import Table, Col
from os import listdir
from os.path import isfile, join
import os, os.path
import numpy as np
import pandas as pd
import time, datetime
import subprocess
import pickle
import sqlite3
import math
from tkinter.filedialog import askopenfilename
from shutil import copyfile
from werkzeug import secure_filename
import glob, shutil
from sys import platform
from flaskext.mysql import MySQL

app = Flask(__name__)

def setup_database():
	global mysql
	mysql = MySQL()
	app.config['MYSQL_DATABASE_USER'] = 'root'
	app.config['MYSQL_DATABASE_PASSWORD'] = 'balloon16'
	app.config['MYSQL_DATABASE_DB'] = 'login'
	app.config['MYSQL_DATABASE_HOST'] = 'localhost'
	mysql.init_app(app)

# Route for handling the login page logic
@app.route('/login', methods=['GET', 'POST'])
def log():
	
	error = None
	if request.method == 'POST' :
		
		connn = mysql.connect()
		conn = connn.cursor()
		conn.execute("select * from users where username=%s",(user))
		
		
		out = conn.fetchall()
		
		for (username,password,color) in out :
			print(request.form['password'])
			if password == request.form['password'] :
				print("HELLO")
				return render_template('signup.html',error=error)
			else :
				print("BYE BYE")
				#return render_template('signup.html',error=error)
			print("DENIED")
#	conn.close()		
	return render_template('login.html',error=error)

@app.route('/log', methods=['POST','GET'])
def load() :
	return render_template("login.html", mode = "false")


@app.route('/user', methods=['GET','POST'])
def user() :
	error = None
	if request.method == 'POST' :
		connn = mysql.connect()
		conn = connn.cursor()
		conn.execute("select * from users where username=%s",(request.form['username']))
		out = conn.fetchall()
		for (username,password,color) in out :
			if username == request.form['username'] :
				print(color)
				connn.close()
				global user
				user = username
				return render_template('login.html',error=error, color=color, username = user, mode = "true")

#	conn.close()
	return render_template('login.html',error=error)



@app.route('/signup', methods=['GET', 'POST'])
def signup():
	error = None
	if request.method == 'POST':
		print(request.form['username'],request.form['password'],request.form['color'])
		query_string = """\INSERT INTO users(username,password,color) VALUES(%s,%s,%s)",(request.form['username'],request.form['password'],request.form['color']);"""
		connn = mysql.connect()
		conn = connn.cursor()
		#conn.execute("INSERT INTO users(username,password,color) VALUES(%s,%s,%s);",(request.form['username'],request.form['password'],request.form['color']))
		conn.execute("insert into users values(%s,%s,%s)",(request.form['username'],request.form['password'],request.form['color']))
		connn.commit()
		out =  conn.fetchall()
		print(out)
#	conn.close()
	return render_template('signup.html', error=error)

@app.route('/authorize', methods=['GET','POST'])
def authorize() :
	error = None
	if request.method == 'POST' :
		connn = mysql.connect()
		conn = connn.cursor()
		conn.execute("select * from users where username=%s",(request.form['username']))
		out = conn.fetchall()
		for (username,password,color) in out :
			if username == request.form['username'] and password == request.form['password'] :
				print("WELCOME USER "+request.form['username'])
				return render_template('signup.html',error=error)

		print("DENIED")
		return render_template('login.html',error=error)




if __name__ == '__main__':
	
	setup_database()
	app.run(debug = True)
