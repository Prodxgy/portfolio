import * as React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const BlogItem = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col md="6">
        <a className="blog-link" onClick={handleShow}>
          <div className="blog-item">
            <div className="blog-img">
              <StaticImage src="../images/blog/header.jpg" /> 
            </div>
            <div className="blog-item-content">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </a>
      </Col>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Row>
            <Col md="12">
              <Modal.Title style={{ color: "#494c4e" }}>
                {props.title}
              </Modal.Title>
            </Col>
            <Col sm="2" style={{ color: "#494c4e" }}>
              <p>{props.author}</p>
            </Col>
            <Col sm="1" style={{ color: "#494c4e" }}>
              <p>{props.date}</p>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body className="d-flex" style={{ color: "#494c4e" }}>
          <Row className="d-flex">
            <Col
              style={{ paddingBottom: "1rem" }}
              md="12"
              className="d-flex text-center"
            >
              <StaticImage
                imgClassName="rounded mx-auto text-center"
                className="mx-auto text-center"
                style={{ textAlign: "center!important" }}
                src="../images/blog/header.jpg"
                alt="header image"
                height="300"
              />
            </Col>
            <Col md="12" className="d-flex">
              <p style={{ color: "#9ca3ac" }} className="text-start">
                Computer science has been exponentially growing as a field as
                more companies have been boasting higher demands for programmers
                more than ever. Even with its benefits such as high salaries,
                amazing companies, etc. the concept is very hard to master and
                is bound to a niche audience who can fulfill the requirements.
                One of the requirements is passing the notorious software
                engineering technical interview. An interview in which your
                skills as a programmer are put to the test by solving a
                real-world problem in the fastest and most efficient way
                possible. Sounds complicated right? Add a daunting interviewer
                to the equation and you found the recipe to stress. But this
                doesn’t have to be stressful given the proper amount of practice
                and knowledge.
              </p>
              <hr />
            </Col>
            <Col md="12" className="d-flex">
              <h4 style={{ color: "#494c4e" }}>
                Understanding Why Companies Would Give a Technical Interview
              </h4>
            </Col>
            <Col md="12" className="d-flex">
              <StaticImage
                imgClassName="rounded mx-auto text-center"
                className="mx-auto text-center"
                src="../images/blog/sub-1.jpg"
                alt="interview"
                height="300"
              />
            </Col>
            <Col md="12" className="d-flex">
              <p style={{ color: "#9ca3ac" }}>
                To first understand how to pass your interview, look into a
                different lens to understand the “why” of a technical interview.
                Companies are looking for qualified candidates that can think
                programmatically towards problems faced in the position a
                candidate is applying for. It also proves to the interviewer
                that you can apply your knowledge of coding first-hand, “Like
                the phrase “Show, don’t tell,” you have to prove that you have
                the skills required to do the job, rather than just tell the
                interviewer that you have them” (Bradford). You could have 10
                programming languages listed in your resume, but if you can’t
                create an algorithm to solve your problems, then you’re not
                going to look appealing to an interviewer as those languages
                would become meaningless.
              </p>
              <hr />
            </Col>
            <Col md="12" className="d-flex">
              <StaticImage
                src="../images/blog/sub-2.jpg"
                className="mx-auto text-center"
                imgClassName="rounded mx-auto text-center"
                alt="practice"
                height="300"
              />
            </Col>
            <Col md="12" className="d-flex">
              <h4>Practice, Practice, Practice!</h4>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                I’m not the one to sound like your dad, but practice will help
                in the field of programming. Don’t memorize the code to solve
                certain leetcode problems! You’re going to stump yourself up
                trying to remember where a semi-colon was than solving the
                problems with your brain, “Always solve the problem
                algorithmically first” (Ciubotariu). Instead, understand the
                algorithms that are required to solve leetcode problems. For
                example, the infamous two-sum problem uses a hash table to look
                at previous indexes. Also remember your constraints! Big O
                notation is key to understanding what would be passing in terms
                of computational efficiency.
              </p>
              <hr />
            </Col>
            <Col md="12" className="d-flex">
              <h4>Example Interview Question: Two Sum</h4>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                <strong>Interviewer:</strong> The first problem I'm assigning
                you is known as the two-sum problem. Given an array (or list)
                depending on your programming language of choice and an integer
                with your target number, return the two indices of the array (or
                list) that sum up to the target. If you can, try to solve this
                with a time complexity less than O(n^2).
              </p>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                <strong>Candidate:</strong> Well when you first look at the
                problem, immediately I thought of a nested loop to go through
                each array index twice to find which ones add up to the target.
                But under this solution it would be O(n^2) since you're looping
                through the array indices multiple times, slowing down the
                program.
              </p>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                <strong>Interviewer:</strong> Most people looking at this
                problem have said the same thing, as it is the easiest way to
                solve this problem. So given that answer, do you have another
                answer that would make the program faster?
              </p>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                <strong>Candidate:</strong> Another way could be utilizing a
                hash map to store each number as a key and index as the value
                pair. When iterating through the array, add it to the hashmap if
                it doesn't already exist. Then while iterating, subtract the
                value from the array from the target and check if it exists in
                the hash map. If it does, return both indices.
              </p>
              <hr></hr>
            </Col>
            <Col md="12" className="d-flex">
              <h4>Interview Analysis</h4>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                This candidate was able to answer a problem in both of the
                correct solutions. Typically employers would like to candidates
                who understand big O notation for time complexity. In this case
                n^2 would mean that you iterated over the same indices twice,
                and n would just mean you iterated only once over them. Even if
                you couldn't solve under the given time complexity, its good
                that you were able to answer the main problem. Another thing
                that the candidate did well was answering clearly and speaking
                his mind. They were honest about the first thing that popped
                into their head and pointed out that it wouldn't fit in the n^2
                time complexity. Finally, using clear vocabulary was good to
                show your interviewer that you have clear communication
                especially in technical terms. Vocab such as "Hashmap" shows
                technical knowledge to show you're more qualified for the
                position you're applying to.
              </p>
            </Col>
            <Col md="12" className="d-flex">
              <StaticImage
                src="../images/blog/sub-3.jpg"
                className="mx-auto text-center"
                imgClassName="rounded mx-auto text-center"
                alt="interview"
                height="300"
              />
            </Col>
            <Col md="12" className="d-flex">
              <h4>Speak Your Mind, But Not Too literally.</h4>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                A key strategy to utilize during the interviews is speaking
                what’s on your mind. This allows for your interviewer to
                understand the way that you think around the problem and can
                help them identify you as a better candidate. But don’t overdo
                this and say there’s no way to solve this. You want to keep that
                perfect character of yourself as the picture for your
                interviewer.
              </p>
            </Col>
            <Col md="12" className="d-flex">
              <h4>Give It Your All, You’ll Get Through This.</h4>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                Not receiving a job from a company may be heartbreaking but
                don’t let that be the roadblock that stops your infinitely long
                highway of life. Try again at the same place or even elsewhere!
                Every software engineer has practically been in your position so
                know you’re not alone. Sometimes getting denied is a good thing,
                it lets you know that you might not be ready for such a high
                stakes position. Keeping your hopes up and consistently
                motivating yourself is the best way to keep your mindset right
                within a stressful time.
              </p>
            </Col>
            <Col md="12" className="d-flex">
              <p>
                Even with a stressful environment to endure in interviews,
                remember it’s just one chapter in the book of your life. You
                also want to remember that your interviewer isn’t the devil.
                They’re human too! Having clear conversation with them and
                asking proper questions would be very enticing as a candidate
                and would help relieve some of your stress. In the end, just
                remember to give it your all and you’ll be happy knowing you did
                the best that you could.
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <a
            style={{ textDecoration: "none" }}
            href="https://unsplash.com/"
            target="_blank"
            rel="noopener norefer"
          >
            Image Credits to Unsplash
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BlogItem;
