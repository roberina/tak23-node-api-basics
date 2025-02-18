import { version } from "joi";

export const swaggerOptions = {
    definition: {
        openai: '3.0.0',
        info: {
            title: 'TAK23 Book REST API',
            version: '1.0.0',
            description: 'NodeJS Express backend API for book management'
        },
        apis: ['./routes/*.js'],
    }
}