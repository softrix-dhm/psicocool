  
CREATE PROCEDURE SP_UPD_COD_GOINTEGRO_PROFILE  
@TIPO VARCHAR(20),  
@XML XML   
   
AS   
BEGIN  
  
/*            
-------------------------------------------------------------------------------------------------------------            
Creado Por: NORVIL GUEVARA                                           
Fecha : 13/05/2021                                                                                               
Descripcion : EDITA LA FECHA DE LA ULTIMA ACTUALIZACION          
*/   
 BEGIN TRY  
  BEGIN TRAN  
                        
  DECLARE @tbdata AS TABLE      
  (          
    hostname   VARCHAR(100)  
   ,codgointegro  VARCHAR(20)  
   ,codempleado  VARCHAR(50)    
   ,estadoprofile  BIT  
   ,codprofile  VARCHAR(20)   
   --,estadobaja bit  
  )  
  
  INSERT INTO @tbdata    
  SELECT             
     T.Item.value('@hostname','VARCHAR(100)')       
   ,T.Item.value('@codgointegro','VARCHAR(20)')       
   ,T.Item.value('@codempleado','VARCHAR(50)')    
   ,T.Item.value('@estadoprofile','BIT')    
   ,T.Item.value('@codprofile','VARCHAR(20)')    
   --,T.Item.value('@estadobaja','BIT')    
              
  FROM  @XML.nodes('Items/Item') AS T(Item)      
  
 IF @TIPO='profile'  
 begin  
  UPDATE  
    TMTRAB_GOINTEGRO  
  SET  
   NO_HOST_NAME = T2.hostname,  
    FE_USUA_MODI = GETDATE(),  
    CO_USUA_MODI='TAWA',  
    STA_PROFI=T2.estadoprofile  
  FROM  
    TMTRAB_GOINTEGRO T1  
  INNER JOIN @tbdata T2 ON   
   T1.CO_TRAB = T2.codempleado   
   AND T1.CO_GO_PROFILE=T2.codprofile  
   AND T1.NO_HOST_NAME=T2.hostname  
  WHERE T1.CO_TRAB=T2.codempleado AND T1.CO_GO_PROFILE=T2.codprofile AND T1.NO_HOST_NAME=T2.hostname  
  COMMIT  
 end  
 IF @TIPO='baja'  
 begin  
  UPDATE  
    TMTRAB_GOINTEGRO  
  SET  
   NO_HOST_NAME = T2.hostname,  
    FE_USUA_MODI = GETDATE(),  
    CO_USUA_MODI='TAWA',  
    STA_BAJA=1  
  FROM  
    TMTRAB_GOINTEGRO T1  
  INNER JOIN @tbdata T2 ON   
   T1.CO_TRAB = T2.codempleado   
   AND T1.CO_GO_INTEG=T2.codgointegro  
   AND T1.NO_HOST_NAME=T2.hostname  
  WHERE T1.CO_TRAB=T2.codempleado AND T1.CO_GO_INTEG=T2.codgointegro AND T1.NO_HOST_NAME=T2.hostname  
  COMMIT  
 end   
      
    
    
 END TRY  
 BEGIN CATCH  
  ROLLBACK  
 END CATCH  
END