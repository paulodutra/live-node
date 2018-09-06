const http = require('http');//Api que já vem no node  

const handler = (req, resp) => {

    resp.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    resp.write('<html>');
    resp.write('<head> <title> Live Node </title></head>');
    resp.write('<body> <h1>Test Live Node</h1> </body>');
    resp.write('</html>');
    resp.end();
};

const server = http.createServer(handler); //99,9% dos caso o uso de ponto não é necessário

//orientado a eventos o evento on request e logo apos executa o handler
server.on('request', () => {
    console.log('REQUEST ACCEPTED'); 
});

server.listen(3000);

