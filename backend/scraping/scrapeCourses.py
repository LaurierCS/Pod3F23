import requests
from bs4 import BeautifulSoup as bs
import pandas 

baseURL = 'https://academic-calendar.wlu.ca/'
basePage = "https://academic-calendar.wlu.ca/section.php?cal=1&s=1041&y=85"
def unpackContents(entry):
        return(entry.contents[0].rstrip('\r\n ').lstrip('\r\n ').replace(" ","_"))

uniques = set([])
m = {}
coursemap = {}
pandasMap = {'courseCodes':[],'link':[],'reviews':[],'bird,math,writing,fun':[]}
def crawlCourse(url):
    webpage = requests.get(url).text
    pool = bs(webpage,"html.parser")
    tab = pool.find("table")
    for j in tab.find_all('tr'):
        try:
            lj = j.find_all('a')
            k = list(map(unpackContents,lj))
            for i,a in enumerate(j.find_all('a',href = True)):
                m[k[i]] = [a['href']]
                print("\n"+k[i])
                print('__________________')
                crawlPage(baseURL+a['href'],k[i])
        except:
            pass

def crawlPage(url,parent):
    webpage = requests.get(url).text
    pool = bs(webpage,"html.parser")
    tab = pool.find("table")
    for j in tab.find_all('tr')[1:]:
        try:
            row_data = j.find_all('a')
            k = list(map(unpackContents,row_data))
            for i,a in enumerate(j.find_all('a',href = True)):
                m[parent].append((k,a['href']))
                print(f'{k[i]}:    {baseURL+a["href"]}')
                if len(f'{k[i]}') <7:
                    coursemap[f'{k[i]}'] = f'{baseURL+a["href"]}'
                    pandasMap['courseCodes'].append(f'{k[i]}')
                    pandasMap['link'].append(f'{baseURL+a["href"]}')
                    pandasMap['reviews'].append([])
                    pandasMap['bird,math,writing,fun'].append([0,0,0,0])
                    uniques.add(f'{k[i][:2]}')
        except:
            pass
        
crawlCourse(basePage)
print('done')
print(uniques)


df = pandas.DataFrame(pandasMap)
df.to_csv('res.csv')

