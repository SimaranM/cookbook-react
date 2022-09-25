import React from 'react'
// import { marked } from 'marked'

const Post = ({ article }) => {
    console.log(article)
    const { ingredients, instructions, recipeImage, recipeIntroduction, recipeTitle } = article.fields
    // const postDescription = marked(description)
    return (
        <div className='post'>
            <div className='recipetitle_main'>
                <h2>{recipeTitle}</h2>
                <p>{recipeIntroduction}</p>
            </div>
            <div className='main_img_part'>
                <div>
                    {recipeImage && <img className='recipeimage' src={recipeImage.fields.file.url} alt={recipeTitle} title={recipeTitle} />}
                    {/* <p>{instructions}</p> */}
                    {/* <section>{description}</section> */}
                    {/* <section dangerouslySetInnerHTML={{__html: postDescription }} /> */}
                </div>
                <div className='text'>
                    {article.fields.instructions.content.map((content) => {
                        if (content.nodeType === "paragraph") {
                            // return <p>{content.content[0].value}</p>;
                            return content.content.map((element) => {
                                return <p> {element.value}</p>
                            });
                        }
                    })}
                </div>
            </div>
            <div>
                {article.fields.ingredients.content.map((content) => {
                    if (content.nodeType === "table") {
                        return content.content.map((row) => {
                            return (
                                <div className='flex'>
                                    {row.content.map((col) => {
                                        /*console.log(col);*/
                                        return <p className='font'> {col.content[0].content[0].value}</p>;
                                    })}
                                </div>
                            );
                        });
                    }
                })}

            </div>
        </div>
    )
}
export default Post
