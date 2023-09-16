import type { Express} from 'express'
import { runApp,closeApp } from './app'
import * as dotenv from 'dotenv'
import initModules from './initModules'
// import { connectMongoDB } from './config/database/mongodb'
dotenv.config()

// const app:Express =  runApp()
const port:string | number = process.env.PORT || 3000



// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
// })

class Server {

    private readonly app:Express
    constructor(){
        this.app = runApp()
    }

    // private connectToDB=async()=>{
    //     //  Connecting to DB
    //     console.log('[database]: connecting to MongoDB...')
    //       // connectMongoDB(process.env.DATABASE_URL as string,"Test")
    // }

    public async startServer(): Promise<void> {
    
        try {
    
          // Init Modules
          initModules.init(this.app)
    
          // Health Route
          // this.app.route('/api/v1/health').get((_req: Request, res: Response) => {
          //   res.status(200).json({
          //     success: true,
          //     server: 'online',
          //     message: 'server is up and running',
          //   })
          // })
    
          // Error Handler
          closeApp(this.app)
    
          this.app.listen(port, () => {
            console.log(`[server] running on port: ${port}`)
          })
    
          // Handling Uncaught Exception
          process.on('uncaughtException', (err) => {
            console.log(`Error: ${err.message}`)
            console.log('[server] shutting down due to Uncaught Exception')
            this.closeServer(1)
          })
    
          // Unhandled Promise Rejection
          process.on('unhandledRejection', (err:any) => {
            console.log(`Error: ${err.message}`)
            console.log('[server] shutting down due to Unhandled Promise Rejection')
            this.closeServer(1)
          })
        } catch (error) {
          // Health Route
          // this.app.route('/api/v1/health').get((_req: Request, res: Response) =>  {
          //   res.status(200).json({
          //     success: false,
          //     server: 'offline',
          //     message: 'server is down due to database connection error',
          //   })
          // })
    
          // this.app.use((_req: Request, res: Response, _next: NextFunction) => {
          //   res.status(500).json({
          //     success: false,
          //     server: 'offline',
          //     message: '[server] offline due to database error',
          //   })
          // })
    
          console.log(`[database]: could not connect due to [${error.message}]`)
          const server = this.app.listen(port, () => {
            // if (err) {
            //   console.log(`[server] could not start http server on port: ${port}`)
            //   return
            // }
            console.log(`[server] running on port: ${port}`)
          })
    
          setTimeout(() => {
            server.close()
            this.startServer()
          }, 10000)
        }
    }


    private closeServer(exitCode: number): void {
        this.app.listen(port, () => {
          process.exit(exitCode)
        })
    }
}

const serverInstance = new Server()
serverInstance.startServer()