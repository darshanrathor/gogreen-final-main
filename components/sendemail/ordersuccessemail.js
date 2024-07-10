export async function sendemail(templateParams) {
    const req =await fetch("/api/sendemail", {
      method: "POST",
      body: JSON.stringify(templateParams),
    });
    console.log(await req.json())
    return true;
  }
  