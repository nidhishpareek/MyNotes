middleware

like express.json()

morgan - logs the requests along with some other information depending upon its configuration and the preset used
        npm i morgan;
        import morgan from 'morgan'
        app.use(morgan('tiny'));


express.static() middleware =>
        app.get('/*'express.static('directory_name'));

        the static will serve the static files present in the directory at same path, like index links on google


JOI library for form validation.

multer- middleware designed to handle multipart/form-data in forms.

   npm install multer
    const upload = multer({ dest: 'uploads/' })

    app.post('/submit', upload.single('avatar'), (req, res) => {
        const file = req.file;

        console.log('mimetype', file.mimetype);
        console.log('originalname', file.originalname);
        console.log('size', file.size);

        return res.send({
            message: 'Form submitted'
        })
    })
HTML form is like ->
    <form action="/submit" method="post" enctype="multipart/form-data">
        <input type="file" name="avatar" />
        <button type="submit">Submit</button>
    </form>

self made alternate of morgan -
    creating funciton-

        function logger(req, res, next) {
        console.log(new Date(), req.method, req.url); // Log 1
        next();                                                     // next is a function
                                                        // next gives control to the next handler in pipeline
        }
        using it as middleware-
        app.use(logger);

    we can use that on route for specific path middleware

    also, if i use middleware before any path, then only  it will be used, if a path is above middleware, it will not be applicable on that.

