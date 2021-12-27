//Function to display meme templates on memestudio page
const Templates = ({ templates, setMeme }) => {
    return (
        <div>
            {templates.map((template) => (
                <div key={template.id} className="template" onClick={() => {
                    setMeme(template)
                }}>
                    <div style={{ backgroundImage: `url(${template.url})` }} className="image">
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Templates;