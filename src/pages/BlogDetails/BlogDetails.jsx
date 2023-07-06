import { React } from "react";
import { SocialLinks, HeaderBlog, HeaderPost, SectionPost, ImgPost, ParagraphPost, GenrePost, AnchorPost, Comments, Comment, CommentConteiner, CommentReply, CommentForm} from './styles'
import {
  LinkFace,
  LinkPinterest,
  LinkLinkedlin,
  LinkTwitter
} from "../../components/Components/Componente/styles";
export default function BlogDetails() {
  return (
    <>
      <HeaderBlog>
        <h3>
          <span className="genres">Action, Magic </span>
          <span className="date">- March 08, 2020</span>
        </h3>
        <h1>Anime for Beginners: 20 Pieces of Essential Viewing</h1>
          <SocialLinks>
            <li>
            <LinkFace>
              <span>F</span>
              <span>Facebook</span>
            </LinkFace>
            </li>
            <li>
              <LinkPinterest>
                <span>F</span>
                <span>Pinterest</span>
              </LinkPinterest>
            </li>
            <li>
              <LinkLinkedlin>
                <span>F</span>
                <span>Linkedlin</span>
              </LinkLinkedlin>
            </li>
            <li>
              <LinkTwitter>
                <span>F</span>
                <span>Twitter</span>
              </LinkTwitter>
            </li>
          </SocialLinks>
      </HeaderBlog>

      <main>
        <HeaderPost>
          <ImgPost src="/assets/blog/details/blog-details-pic.jpg" alt="" />
          <ParagraphPost>As a result the last couple of eps haven’t been super exciting for me, because they’ve been more like settling into a familiar and comfortable routine.  We’re seeing character growth here but it’s subtle (apart from Shouyou, arguably).  I mean, Tobio being an asshole is nothing new – it’s kind of the foundation of his entire character arc.  Confronting whether his being an asshole is a problem for the Crows this directly is a bit of an evolution, and probably an overdue one at that, but the overall dynamic with Kageyama is basically unchanged.</ParagraphPost>
        </HeaderPost>

        <SectionPost>
          <h2>Tobio-Nishinoya showdown:</h2>
          <ImgPost src="/assets/blog/details/bd-item-1.jpg" alt="Imagem referente ao post" />
          <ParagraphPost>In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment.</ParagraphPost>
        </SectionPost>

        <SectionPost>
          <h2>Nanatsu no Taizai: Kamigami No Gekirin:</h2>
          <ImgPost src="/assets/blog/details/bd-item-2.jpg" alt="Imagem referente ao post"/>
          <ParagraphPost>In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment.</ParagraphPost>
        </SectionPost>

        <SectionPost>
          <h2>ID:Ianvaded:</h2>
          <ImgPost src="/assets/blog/details/bd-item-3.jpg" alt="Imagem referente ao post" />
          <ParagraphPost>In Japan the idea of a first-year speaking to a senior the way Kageyama did to Asahi is a lot more shocking than it would be in the West, but Tobio calling out teammates in genuinely rude fashion in the middle of a match is what got him isolated in the first place.  It’s better for the Crows to sort this out in practice matches than the real deal, but this is really on Tobio – he has to figure out how to co-exist with others in a team environment.</ParagraphPost>
        </SectionPost>

        <footer>
          <GenrePost>
            <li><a href="">Healthfood</a></li>
            <li><a href="">Sport</a></li>
            <li><a href="">Game</a></li>
          </GenrePost>
        </footer>
      </main>

      <AnchorPost>
        <a href=""> -- Building a Better LiA...</a>
        <a href=""> Mugen no Juunin: Immortal – 21 --</a>
      </AnchorPost>
        
      <Comments>
        <h3> 3 Comments</h3>

        <CommentConteiner>
          <Comment>
            <img src="/assets/blog/details/comment-1.png" alt="Foto de usuário" />
            <section>
              <span>Sep 08, 2020</span>
              <h4>John Smith</h4>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
              <div>
                <button>Like</button>
                <button>Reply</button>
              </div>
            </section>
          </Comment>
          
          <CommentReply>
            <img src="/assets/blog/details/comment-2.png" alt="Foto de usuário" />
            <section>
              <span>Sep 08, 2020</span>
              <h4>Elizabeth Perry</h4>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
              <div>
                <button>Like</button>
                <button>Reply</button>
              </div>
            </section>
          </CommentReply>
        </CommentConteiner>
        
        <CommentConteiner>
          <Comment>
            <img src="/assets/blog/details/comment-3.png" alt="Foto de usuário" />
            <section>
              <span>Sep 08, 2020</span>
              <h4>Adrian Coleman</h4>
              <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi</p>
              <div>
                <button>Like</button>
                <button>Reply</button>
              </div>
            </section>
          </Comment>
        </CommentConteiner>
      </Comments>

      <CommentForm action="#">
        <h3>Leave A Comment</h3>
        <div>
          <input type="text" name="" id="" placeholder="Name" />
          <input type="email" name="" id="" placeholder="Email" />
        </div>
        <textarea name="" placeholder="Message" resize='no' maxlength="355"></textarea>

        <button type="submit">Send Message</button>
      </CommentForm>
      </>
    );
  }
