class Profile{
    add(){
        console.log("Add Method")
        document.write("Add Method")
        document.write("<br><br>")

    }

    update(){
        console.log("update Method")
        document.write("Update Method")
        document.write("<br><br>")

    }

    read(){
        console.log("read Method")
        document.write("Read Method")
        document.write("<br><br>")

    }

    delete(){
        console.log("delete Method")
        document.write("Delete Method")
        document.write("<br><br>")

    }
}

let p = new Profile()
p.add()
p.delete()
p.read()
p.update()