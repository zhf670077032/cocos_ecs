import xlrd
import os
from lupa import LuaRuntime 


lua = LuaRuntime() 
file = open('./main.lua')
content = file.read()
lua.execute(content)

g = lua.globals()
func_main = g.Main



def file_name_walk(file_dir):
    for root, dirs, files in os.walk(file_dir):
        for index in range(0, len(files)):
            file_name = files[index]
            if file_name.endswith(".xlsx"):
                excel_name = root + "/" + file_name
                data = xlrd.open_workbook(excel_name)
                func_main(data, excel_name, len(data.sheets()))
file_name_walk("./excel")