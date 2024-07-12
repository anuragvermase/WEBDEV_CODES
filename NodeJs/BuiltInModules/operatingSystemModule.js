/*Operationg System Module : utilized to retrive detals about the OS of a computer. It offers methods 
for communication with the computer's  OS, including retriving the host name and 
the amount of available system memory in bytes 
*/

// include os module

const os = require('os');
/*
console.log("CPU architecture : ", os.arch()); //x64
console.log("Free Memory in Bytes : ", os.freemem()); //8603480064
console.log("Tota; Memory in Bytes : ", os.totalmem() ); //16455942144
console.log("Network Interface : ", os.networkInterfaces());
/*
Network Interface :  {
  'Wi-Fi': [
    {
      address: '2404:ba00:fc09:4194:acbf:c845:3b48:7404',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '30:03:c8:f2:73:61',
      internal: false,
      cidr: '2404:ba00:fc09:4194:acbf:c845:3b48:7404/64',
      scopeid: 0
    },
    {
      address: '2404:ba00:fc09:4194:2c75:b340:86a4:50e6',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '30:03:c8:f2:73:61',
      internal: false,
      cidr: '2404:ba00:fc09:4194:2c75:b340:86a4:50e6/128',
      scopeid: 0
    },
    {
      address: 'fe80::7366:59a7:72ed:f2d8',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '30:03:c8:f2:73:61',
      internal: false,
      cidr: 'fe80::7366:59a7:72ed:f2d8/64',
      scopeid: 17
    },
    {
      address: '192.168.1.34',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '30:03:c8:f2:73:61',
      internal: false,
      cidr: '192.168.1.34/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}


console.log("Temporary Directory : ", os.tmpdir()); // C:\Users\HP\AppData\Local\Temp
*/

//Some more commands
console.log("Endianness : ", os.endianness());
console.log("host name : ", os.hostname());
console.log("type of OS : ", os.type());
console.log("platform : ", os.platform());
console.log("release : ", os.release());
/**
Endianness :  LE
host name :  DESKTOP-UFVS40E
type of OS :  Windows_NT
platform :  win32
release :  10.0.22631
 */
