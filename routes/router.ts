
import { Router, Request, Response }  from 'express';


// export const router = Router();

const router = Router();



// Creación de servicios.


// SERVICIO GET
router.get('/mensajes', ( req: Request, res: Response) => {


res.json({
      ok: true,
      mensaje: 'Todo está bien'

});
});


// SERVICIO POST
router.post('/mensajes', ( req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
          ok: true,
          cuerpo,
          de    
    });
    });

    router.post('/mensajes/:id', ( req: Request, res: Response) => {

        const cuerpo = req.body.cuerpo;
        const de     = req.body.de;

        // Recuperar el valor de id

        const id     = req.params.id;
    
        res.json({
              ok: true,
              cuerpo,
              de,
              id    
        });
        });
    



export default router;