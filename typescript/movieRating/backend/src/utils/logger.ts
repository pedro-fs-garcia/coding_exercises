import winston from "winston";

const logger = winston.createLogger({
    level: "info", // Define o nível mínimo dos logs (info, warn, error, etc.)
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console(), // Exibe logs no console
      new winston.transports.File({ filename: "app.log" }), // Salva logs em um arquivo
    ],
});
  
export default logger;

//como usar:
//registrar um erro: logger.error(`Erro: ${err.message}`);
//registrar uma mensagem no logger: logger.info(`Servidor rodando na porta ${PORT}`);