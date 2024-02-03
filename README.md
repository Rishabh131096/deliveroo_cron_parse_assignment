# Deliveroo_cron_parser
cron parser for take home assignment

works for string parameter eg:  
### node index.js "10,9,13-50/4 0-23 2,4 */3 * usr/bin/"    

for running tests:  
### npm test  

'*'	any value  
','	value list separator  
'-'	range of values  
'/'	step values  


minute: 0-59  
hour: 0-23  
day: 1-31  
month: 1-12  
dayOfWeek: 0-6  