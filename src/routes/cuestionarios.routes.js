import  express  from "express";
import { 
     insCuestionarioDE
    ,insCuestionarioCtrl
    ,insCuestionarioDocCtrl
    ,listCuestionariosGrupDocCtrl
    ,listCuestionariosGrupCDDocCtrl
    ,insCuestionarioFileCtrl
    ,updCuestionarioCabCtrl
    ,listCuestionariosGrupEstCtrl
    ,listCuestionariosGrupCDEstCtrl
    ,listCuestionariosIndivDocCtrl
    ,listCuestionariosIndivCDDocCtrl
    ,listCuestionariosEstudiantesCtrl
    ,listCuestionariosEstudiantesDetCtrl
    ,listCitasDirectorCtrl
    ,listCuestionariosEstudiantesPadCtrl
     } from '../controllers/cuestionarios.controller.js'

import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload = multer({ storage: storage });

// app.use('/src/uploads', express.static(join(__dirname, 'src/uploads')));

router.post("/ins-director-estudiante", insCuestionarioDE)
router.post("/ins-cuestionario", insCuestionarioCtrl)
router.post("/ins-cuestionario-doc", insCuestionarioDocCtrl)
router.post("/list-cuestionario-grup-doc", listCuestionariosGrupDocCtrl)
router.post("/list-cuestionario-cd-doc", listCuestionariosGrupCDDocCtrl)
router.post('/upload', upload.single('file'), (req, res) => {
    try{

        console.log(storage.destination);
        const { id,filename } = req.body;        
        const newFileName = process.env.PORT
        const resp = insCuestionarioFileCtrl('I01',id,filename);
             
        return res.status(200).json({
            status: true,
            message: 'Archivo subido con éxito',
            data: '',            
        });
    }
    catch{
        return res.status(500).json({ message: "Ocurrió un error" });
    }    
  });
  router.get('/download/:fileName',  (req, res) => {           
        const fileName = req.params.fileName;
        const filePath = join(__dirname,'..', 'uploads', fileName);    
        res.download(filePath);                       
  });
  router.post("/update-cuestionario", updCuestionarioCabCtrl)
  router.post("/list-cuestionario-grup-est", listCuestionariosGrupEstCtrl)
  router.post("/list-cuestionario-cd-est", listCuestionariosGrupCDEstCtrl)
  router.post("/list-cuestionario-indiv-doc", listCuestionariosIndivDocCtrl)
  router.post("/list-cuestionario-indiv-cd-est", listCuestionariosIndivCDDocCtrl)
  router.post("/list-cita-estudiante", listCuestionariosEstudiantesCtrl)  
  router.post("/list-cita-estudiante-det", listCuestionariosEstudiantesDetCtrl)
  router.post("/list-resultado-director", listCitasDirectorCtrl)
  router.post("/list-resultado-estudiante", listCuestionariosEstudiantesPadCtrl)

export default router