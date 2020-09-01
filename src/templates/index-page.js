import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import dq  from '../img/aikido_cropped.jpg'
import kenpo from '../img/Kenpo.png'
import angelos from '../img/angelos.png'
import antonas from '../img/Antonas.jpg'
import verzi from '../img/Vezirgiannis.jpg'
import '../components/programm.css'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div id='pipi'
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
          top:' 361px',
          right: '-1em',
          position: 'absolute'
        }}
      >
        <p
          style={{
            boxShadow:
              'rgb(255, 68, 0) -0.3rem 0px 0px',

            color: 'white',
            backgroundColor:'#2b2b2b',
            lineHeight: '1.3',
            padding: '1em',
            margin:'20px',
            textAlign:'right',
            fontStyle:'italic'
          }}
        >
        Μέσα από τις πολεμικές τέχνες, εφοδιάζουμε
το μαθητή με δεξιότητες για τη ζωή.
        </p>
      </div>

      </div>
<br/><br/>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title" id='line' style={{color:'#ff4400'}}>{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <p> {mainpitch.description}</p>
                  </div>
                    <br/>
                  <p>{mainpitch.text}</p>
                  <ul class="a">
                    <li><strong>Αϊ (合,ai)</strong> – ένωση, σύνδεση, αρμονία.</li>
                    <li><strong>Κι (気,ki)</strong> – πνεύμα, ενέργεια, διάθεση, ηθικό</li>
                    <li><strong>Ντο (道,dō)</strong> – δρόμος, τρόπος.</li>
                  </ul>
                  <p>
                    Πρόκειται για μία εξευγενισμένη μορφή του ζιου ζoύτσου.
                    Η σύγχρονη μορφή του διαμορφώθηκε στα μέσα του 20ου αιώνα από τον <strong>Μοριχέι Ουεσίμπα (Morihei Ueshiba)</strong>
                    , ο οποίος στον κύκλο του Αϊκίντο είναι γνωστός και ως <strong>Ο-Σένσει</strong> (Ōsensei, Μεγάλος Δάσκαλος).
                  </p>
                  <p>
                   Η βασική αρχή του Αϊκίντο βασίζεται στην αλληλεπίδραση της <strong>αρμονίας</strong> με την <strong>ενέργεια</strong>.
                   Με σωστή χρήση του δικού μας σώματος και της ορμής του επιτιθέμενου, πετυχαίνουμε
                   <strong> έλεγχο χωρίς την ανάγκη μυικής δύναμης</strong>.
                 </p>

                </div>
                <br/>
                <div className="columns">
                  <div className="column is-12">
                    <h1 className="title" style={{color:'#ff4400'}} id='line'>
                      ΚΕNΠΟ
                    </h1>
                    <img src={kenpo} id='kenpo'/>
                    <br/>
                    <div id='keimeno'>
                    <p>{description}</p>
                    <p>Πρόκειται για ένα σύγχρονο σύστημα πολεμικών τεχνών με πρωτοποριακές ιδέες που σπάνε πολλές παραδοσιακές αντιλήψεις του χώρου των πολεμικών τεχνών. Συνδυάζει κυκλική και γραμμική κίνηση με συνεχή ροή και οικονομία κινήσεων, με ιδιαίτερη έμφαση στην αντιμετώπιση πολλαπλών αντιπάλων. Ο Ed Parker ήταν άριστος γνώστης της ανατομίας του ανθρώπινου σώματος, ενώ ενέταξε στην πολεμική τέχνη και την εμπειρία του στη μάχη του δρόμου, αφού γεννήθηκε και μεγάλωσε στους άγριους τότε δρόμους της Hawaii. </p>
                    <p>Το Κένπο διαμορφώνει τον <strong>επιστημονικό μαχητή του δρόμου</strong> και χαρακτηρίζεται ως ένα εξαιρετικά αποτελεσματικό σύστημα αυτοάμυνας,
                     το οποίο διδάσκεται σε πολλές χώρες ανά την υφήλιο.</p>
                     </div>
                  </div>
                </div>
                <br/><br/>
                <div id='carda'>
                <h1 className="title" style={{color:'#ff4400'}} id='line'>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</h1>
                  <p>To Evolution dojo είναι ένας χώρος για την ανάπτυξη σωματικών και πνευματικών δεξιοτήτων μέσα από την εκπαίδευση στις πολεμικές τέχνες.</p>
                  <p>Στόχος μας είναι μέσα από την πολύπλευρη εκπαίδευση και την επίτευξη της τεχνικής αρτιότητας,
                  ο εκπαιδευόμενος να αποκτήσει εφόδια που θα τον βοηθήσουν στην προσωπική και την επαγγελματική του εξέλιξη.</p>
<br/>
<ul id='uli'>
<li id='pli'>
                  <aside class="profile-card">
                    <header>
                      <a>
                        <img src={angelos}/>
                      </a>
                      <div id='identity'>
                      <h5 style={{fontSize:'17px',color:'white'}}>Άγγελος Σκέμπρης </h5>
                      <h6 style={{fontSize:'15px',color:'#ff4400'}}>3o dan Aikikai</h6>

                      <h6 style={{fontSize:'15px',color:'#ff4400'}}>Ιδρυτής και Διευθυντής Εκπαίδευσης</h6>
                      </div>
                    </header>

                    <div class="profile-bio">

                      <p style={{textAlign:'left'}}>Ο Άγγελος ασχολείται με τις πολεμικές τέχνες από το 1998,
                                                   όπου ξεκίνησε Jiu Jitsu στο Λονδίνο. Το 2001 συνέχισε με Αϊκίντο στην Ελλάδα με τον Γιάννη Τσοροτιώτη.
                                                   Διδάσκει συστηματικά από το 2005 και είναι μέλος της Shimbokukai,
                                                   μίας διεθνούς οργάνωσης μέλους του Aikikai που αριθμεί πολλά dojo ανά τον κόσμο.
                                                   Ίδρυσε το Evolution Dojo με στόχο να δημιουργήσει ένα περιβάλλον προσωπικής εξέλιξης
                                                   μέσα από τις πολεμικές τέχνες. Είναι αριστούχος απόφοιτος ηλεκτρολόγος μηχανικός του Imperial College,
                                                   London και κάτοχος διδακτορικού από το ΕΜΠ και εργάζεται ως επιστημονικός
                                                   και επιχειρηματικός σύμβουλος καινοτόμων επιχειρήσεων..</p>

                    </div>


                    <ul class="profile-social-links">

                    </ul>

                  </aside>
                  </li>

<li id='pli'>
                  <aside class="profile-card">
                    <header>
                      <a>
                        <img src={antonas}/>
                      </a>
                      <div id='identity'>
                      <h5 style={{fontSize:'17px',color:'white'}}>Βασίλης Αντωνάς </h5>
                      <h6 style={{fontSize:'15px',color:'#ff4400'}}>3o dan Aikikai</h6>

                      <h6 style={{fontSize:'15px',color:'#ff4400'}}>Instructor</h6>
                      </div>
                    </header>

                    <div class="profile-bio">

                      <p style={{textAlign:'left'}}>Ο Βασίλης Αντωνάς ξεκίνησε το Aikido το 2000 στο Λονδίνο,
                                                    υπό τον Sensei Andy Hathaway (6o dan Aikikai) και συνέχισε το 2006
                                                    στην Ελλάδα υπό τον Sensei Tony Sargeant (6o dan Aikikai),
                                                    ακολουθώντας τη σχολή Takemusu –Iwama Ryu. Ενδιάμεσα εκπαιδεύτηκε
                                                    από αξιόλογους Έλληνες Aikidoka, όπως ο Γιάννης Τσοροτιώτης και ο Γιάννης Μιχαήλος.
                                                    Έχει συμμετάσχει σε δεκάδες σεμινάρια και uchi deshi. Μαζί με τον Head Instructor, του Evolution Dojo,
                                                    Άγγελο Σκέμπρη, ο Βασίλης είναι μέλος της Shibokukai. Όταν δεν κάνει Aikido, παίζει και γράφει μουσική,
                                                    κάνει ψαροντούφεκο, ταξιδεύει και εργάζεται ως ψυχοθεραπευτής και σύμβουλος ηγεσίας.</p>

                    </div>


                    <ul class="profile-social-links">

                    </ul>

                  </aside>
</li>
<li id='pli'>
                  <aside class="profile-card">
                    <header>
                      <a>
                        <img src={verzi}/>
                      </a>
                      <div id='identity'>
                      <h5 style={{fontSize:'17px',color:'white'}}>Βασίλης Βεζυργιάννης </h5>
                      <h6 style={{fontSize:'15px',color:'#ff4400'}}>5o dan IKKA</h6>

                      <h6 style={{fontSize:'15px',color:'#ff4400'}}>Instructor</h6>
                      </div>
                    </header>

                    <div class="profile-bio">

                      <p style={{textAlign:'left'}}>Ο Βασίλης Βεζυργιάννης είναι διπλωματούχος ηλεκτρονικός και
                                                    προπονητης της ΓΓΑ στο Semi Contact. Ξεκίνησε τις πολεμικές τέχνες το 1986
                                                    και είναι κάτοχος μαύρης ζώνης 5ου βαθμού στο Kenpo Karate,
                                                    με το οποίο ασχολείται από το 1990. Έχει πολυάριθμες διακρίσεις σε αθλητικές οργανώσεις
                                                    καράτε σε παγκόσμιο επίπεδο, κατακτώντας την πρώτη θέση σε αγώνες Karate και Kenpo Karate
                                                    πάνω από 15 φορές. Έχει παρακολουθήσει σεμινάρια με πολλούς μεγάλους εκπαιδευτές του Κenpo Karate,
                                                    συμπεριλαμβανομένου και των Jeff Speakman, Larry Tatum και Ed Parker Jr.
                                                    Επιπλέον, είναι κάτοχος μαύρης ζώνης πρώτου βαθμού στο kick boxing.
                                                    Στον ελεύθερό του χρόνο ασχολείται με τις καταδύσεις.</p>

                    </div>


                    <ul class="profile-social-links">

                    </ul>

                  </aside>
  </li>
  </ul>
                  </div>
                <br/><br/>
                <div className="column is-12">
                  <h1 className="title"style={{color:'#ff4400'}} id='line'>
                    Ελάτε να ξεκινήσουμε
                  </h1>
                  <p style={{textAlign:'left'}}>Η εκπαίδευσή μας είναι κατάλληλη για όλες τις ηλικίες και σωματότυπους!
                                                Το μόνο που χρειάζεστε για να ξεκινήσετε είναι μία μακριά φόρμα και ένα κοντομάνικο ή φούτερ γυμναστικής.
                                                Οι πρώτες δύο εβδομάδες είναι εντελώς δωρεάν - ελάτε να δοκιμάσετε!
                                                Μετά από το μάθημα της Τετάρτης ακολουθεί διαλογισμός διάρκειας 30 λεπτών.
                                                Η σχολή ανοίγει 10 λεπτά πριν την έναρξη του μαθήματος.
                                                Ο χώρος διατίθεται σε εκπαιδευτές πολεμικών τεχνών, σωματικών και άλλων δραστηριοτήτων.
                                                Παρακαλούμε επικοινωνείστε μαζί μας εάν επιθυμείτε να δεσμεύσετε ώρες για μαθήματα.  </p>
                                                <p>Απορίες; Δείτε τις <a id='ak' href="/erwthseis">συχνές ερωτήσεις</a>!</p>
                </div>

                </div>
              </div>
            </div>
            </div>
            </div>
            </section>
            <section id='lola' className="section section--gradient">
              <div className="container">
              <div className="section" >
                <div className="columns" >
                  <div className="column is-10 is-offset-1">
                    <div className="content">

                <div id='prog' style={{}}>
                <div className="column is-12">
                  <h1 style={{color:'#ff4400'}} className="title">
                    Προγραμμά μαθημάτων
                  </h1>
                  </div>
                  <ul class="main">
  <li class="date">
    <h3 style={{color:'white'}}>Δευτέρα</h3>

  </li>
  <li class= "events">
    <ul class="events-detail">
      <li>

          <span style={{color:'white'}} class="event-time">19:00 - 20:30 </span>
          <span style={{color:'white'}} class="event-time">Αϊκίντο</span>
          <br />
          <span class="event-location">(12+)</span>

      </li>

    </ul>
  </li>


    <li class="date">
    <h3 style={{color:'white'}}>Τρίτη</h3>
  </li>
  <li class= "events cf">
    <ul class="events-detail">
      <li>

          <span style={{color:'white'}} class="event-time">17:30 - 18:30 </span>
          <span  style={{color:'white'}}class="event-name"> Κένπο</span>
          <br />
          <span class="event-location"> (Junior)</span>

      </li>

       <li>

          <span style={{color:'white'}} class="event-time">18:30 - 20:00</span>
          <span style={{color:'white'}} class="event-name">  Κένπο</span>
          <br />
          <span  class="event-location">(5-12)</span>

      </li>

       <li>

          <span style={{color:'white'}} class="event-time">20:00 - 21:00</span>
          <span style={{color:'white'}} class="event-name"> Κένπο </span>
          <br />
          <span class="event-location">(12+)</span>

      </li>
    </ul>
  </li>

   <li class="date">
    <h3 style={{color:'white'}}>Τετάρτη</h3>
    <p></p>
  </li>
  <li class= "events">
    <ul class="events-detail">
      <li>

          <span style={{color:'white'}} class="event-time">19:00 - 20:30 </span>
          <span style={{color:'white'}} class="event-name">Αϊκίντο</span>
          <br />
          <span class="event-location">(12+)</span>

      </li>
      </ul>

  </li>


  <li class="date">
    <h3 style={{color:'white'}}>Πέμπτη</h3>
  </li>
  <li class= "events cf">
    <ul class="events-detail">
      <li>

          <span style={{color:'white'}} class="event-time">17:30 - 18:30 </span>
          <span style={{color:'white'}} class="event-name"> Κένπο</span>
          <br />
          <span  class="event-location"> (Junior)</span>

      </li>

       <li>

          <span style={{color:'white'}} class="event-time">18:30 - 20:00</span>
          <span style={{color:'white'}} class="event-name"> Κένπο</span>
          <br />
          <span  class="event-location">(5-12)</span>

      </li>

       <li>

          <span style={{color:'white'}} class="event-time">20:00 - 21:00</span>
          <span style={{color:'white'}} class="event-name"> Κένπο </span>
          <br />
          <span class="event-location">(12+)</span>

      </li>
    </ul>


  </li>

  <li class="date">
   <h3 style={{color:'white'}}>Παρασκευή</h3>
   <p></p>
 </li>
 <li class= "events">
   <ul class="events-detail">
     <li>

         <span style={{color:'white'}} class="event-time">19:00 - 20:30 </span>
         <span style={{color:'white'}} class="event-name">Αϊκίντο</span>
         <br />
         <span class="event-location">(12+)</span>

     </li>
     </ul>

 </li>

 <li class="date">
  <h3 style={{color:'white'}}>Σάββατο</h3>
  <p></p>
</li>
<li class= "events">
  <ul class="events-detail">
    <li>

        <span style={{color:'white'}} class="event-time">11:30 - 13:00 </span>
        <span style={{color:'white'}} class="event-name">Αϊκίντο</span>
        <br />
        <span class="event-location">(12+)</span>

    </li>
    </ul>

</li>

</ul>
    </div>
    </div>
  </div>
</div>
</div>
</div>
</section>
<section id='zola'className="section section--gradient">
  <div className="container">
  <div className="section" id='zola'>
    <div className="columns">
      <div className="column is-10 is-offset-1">
        <div className="content">


                <div className="column is-12" id='blog'>
                  <h3 style={{color:'#ff4400'}} className="has-text-weight-semibold is-size-2">
                    Blog
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Διαβάστε Περισσότερα
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          text
        }
        description

        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
