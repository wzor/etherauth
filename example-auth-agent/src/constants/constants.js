export const ADDRESS = '0x5c1d22daf610358d86a35ac8351d53baa09133cc';
export const ABI = [{"constant":false,"inputs":[{"name":"_login","type":"string"}],"name":"dropAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_login","type":"string"}],"name":"authAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_login","type":"string"}],"name":"createAccount","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_login","type":"string"}],"name":"recoveryAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_login","type":"string"},{"name":"_addr","type":"address"}],"name":"setRecoveryAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_login","type":"string"},{"name":"_addr","type":"address"}],"name":"setAuthAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"login","type":"string"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"login","type":"string"},{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"}],"name":"AuthChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"login","type":"string"},{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"}],"name":"RecoveryChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"login","type":"string"},{"indexed":false,"name":"by","type":"address"}],"name":"Drop","type":"event"}];
