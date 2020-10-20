import cloudinary from "cloudinary"
import { fileUpload } from "../../helpers/fileUpload"
import "@testing-library/jest-dom"

cloudinary.v2.config({ 
  cloud_name: 'edgar2020', 
  api_key: '973973938573648', 
  api_secret: 'vJUN5AXUYlrjv-XxyZFwB2V_lnU' 
});

describe('testing in fileUpload', () => {
  test('should load a file and return the url', async (done) => {
    jest.setTimeout(30000)
    const resp = await fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO0Kv0gK6iwRWkglkPVTQrpb72e4qpsmw6Jw&usqp=CAU")
    const blob = await resp.blob()
    
    const file = new File([blob], "foto.png")
    const url = await fileUpload(file)
    
    expect(typeof url).toBe("string")

    // borrar imagen por id
    const segments = url.split("/")
    const imgId = segments[segments.length - 1].replace(".jpg", "")

    cloudinary.v2.api.delete_resources(imgId, (err)=> {
      console.log("err: ", err)
      done()
    })
    
  })
  
  test('should return null', async () => {
    jest.setTimeout(30000)

    const url = await fileUpload("")
    expect(url).toBe(null)

  })
  
})
