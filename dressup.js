
$(document).ready(function(){


function ImageSwitcher(choices, paras, doc, i, j) {
	i = 0;
	j = 0;
    m=0;
    b=0;
    th=0;
	this.Next = function() {
		hide_current_image();
		show_next_image();
       
	}
	
	var hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}

	}
	var show_next_image = function() {
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
        var para=document.getElementById(doc);
        if(para){
            para.innerHTML=paras[i];
        }
        var mo=document.getElementById('test1');
        if(mo){
            console.log("ABC");
            mo.onclick = function(){motivation();};
        }
        var b=document.getElementById('body_btn');
        if(b){
            console.log("DEF")
            b.onclick = function(){body_picker.Next();};
        }
        var se=document.getElementById('m_u_btn');
        if(se){
            console.log("JKL")
            se.onclick=function(){se_picker.Next();}
        }
        var th=document.getElementById('theme_btn');
        if(th){
            console.log("GHI")
            th.onclick = function(){thems();};
        }
    

	}

    var motivation = function() {
        var next=document.getElementById('m_p');
        if(m == (mtvns.length-1)){
            m = 0;
        }else{
            m+=1;
        }
        next.innerHTML=mtvns[m];
    }

    var thems = function() {
        var next=document.getElementById('theme_p');
        if( th == (thms.length-1)){
            th = 0;
        }else{
            th+=1;
        }
        next.innerHTML=thms[th];
    }
}
  
    var pants = $(".pant");
	var shirts = $(".shirt");
    var hairs = $(".hair");
    var bodies=$(".character");
    var ses=$(".se");

    var body_picker = new ImageSwitcher(bodies);
    document.getElementById("body_button").onclick = function() { body_picker.Next(); };
    var se_picker = new ImageSwitcher(ses);
    
    var hair_picker = new ImageSwitcher(hairs, p1, "text1");
	document.getElementById("hair_button").onclick = function() { hair_picker.Next(); };
    
    var shirt_picker = new ImageSwitcher(shirts, p2, "text2");
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
	
	var pants_picker = new ImageSwitcher(pants, p3, "text3");
	document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
	
});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });

 
  var p1 = new Array(
    "<p> I worry that if this is the field I decide to stay in that I’ll always be trying to shake off the weight of being labelled a ‘diversity hire’. To be feminine is to be fickle, or facile, or a fraud.</p><p> This was a view I internalised early on. If I was a smart girl then I wasn’t worried about being a pretty one. It would be shallow to care about my appearance, or to even just brush my hair every once in a while. I was a geek, and a nerd, and just so happened to be a girl. This was around the time I stopped seeking out games for girls. Clearly I had outgrown them. </p>",
    "<p>My first glimpse of video games was looking over shoulders. Watching my dad and brother save the world by smashing crates and stealing cars. I never felt any desire to hold the controller myself - the gameplay and mechanics were the least interesting part of these games for me, and I hated losing too much to ever learn how to win.</p>",
    "<p>Observing was always enough for me. I could fall in love with the high fantasy story lines (<a href='https://en.wikipedia.org/wiki/Sly_Cooper' target='_blank'>'a young adult raccoon and the latest descendant in a line of master thieves'</a>), with the elaborate worlds (<a href='https://ratchetandclank.fandom.com/wiki/Solana_Galaxy' target='_blank'>the distant Solana Galaxy</a>, and <a href='https://crashbandicoot.fandom.com/wiki/Wumpa_Islands' target='_blank'>the perilous Wumpa Islands</a>), with the graphics and the dialogue, and the fact that these were stories you could live inside and control what happens next. But what I loved most of all about my early experiences with gaming was the character creation. A chance to decide who you wanted to be in the story.</p>",
    "<p>I’d craft masterpieces for my brother to play as in <a href='https://en.wikipedia.org/wiki/Tony_Hawk%27s_Underground' target='_blank'>Tony Hawk Underground</a>, - a tie-dye t-shirt expertly paired with the low slung jeans and side fringe. When my sister was gifted a copy of the first <a href='https://en.wikipedia.org/wiki/The_Sims_(video_game)' target='_blank'>Sims</a> game, I spent hours bloating her saves with family after family. Each backstory was more intricate and complicated than the one before, and each outfit was essentially identical since there were really only two good options. I never actually played with these families though - it seemed a waste when all my hard work would inevitably go up in pixelated flames.</p>",
    "<p> When video games and consoles first became accessible to the average household consumer, they were being marketed to parents as an evening of good clean wholesome fun for the entire family - and educational too! The promotional images featured boys, girls, and adults alike; and when you’re working with 8 bits at a time it’s pretty hard to get too gendered with the graphics. </p>",
    "<p>Sometime when I was around seven years old my sister and I spent a week with our grandmother. Before we all caught the train home, she took us to a bookstore and told us we could pick out whatever we wanted, as long as we promised not to tell our mother how much she had spent on us. We each picked out a copy of a fashion design book (it being a well known fact that second daughter privilege is being able to directly copy your cool older sister) that let you cut out paper dolls, and then create outfits from a variety of included fabric scraps, ribbons, sequins, and glitter glues. \n ‘Book’ may actually be a bit of a loose descriptor here.</p>",
    "<p>These books were drawing on the same traditions that online dress-up games would also later reference. Paper dolls are traceable to the 1700’s, and their first digital iterations were found in the form of Digital Kisekae System Sets. With the rise of the free-to-play online flash game, browser-based dress up games were quick and cheap to create, and had a precedent of appeal that would guarantee traffic from an audience with few real alternatives. \n The book purchased for me by my grandmother was the first of many similar paper dress up toys. I never got full use out of any of them, being far too terrified of the permanency of deciding on any one design. Eventually they were lost to the general detritus of growing up. Digital dress up games, on the other hand, remain but a click away even to this day for when I’m struck by a sudden desire for whimsy (or procrastination). And in this case, there’s always the undo button if I decide I hate what I have made.</p>",
    "<p>I obviously like dress up games, and I think it’s worth maintaining a degree of compassion for them. The concept is appealing to young girls (as well as many young boys), and served to meet a need at a time when there was a dearth of other options. Furthermore, these easily accessible games were instrumental in introducing countless young girls (myself included) to the idea of the internet as a place that could be for them too, and in introducing more women to the world of coding and game design. However, their main audience is not prioritised by the industry and so the quality, effort, and innovation that has been invested into the dress up game over time is pretty lacklustre. The revenue model relies on maximising page visits and clicks, not on making high quality or engaging games.</p>",
    "<p><button class='button2' id='test1'>It feels strange to try and guess at the motivations of this younger version of myself.</button></p> <div id='m_p'> <p>Maybe it was the sparkly effects and bright pink colour scheme.</p></div> <p> Whatever the reason, as soon as I discovered dress up games, I was hooked. Which is part of why I find it difficult to now condemn them, despite their clear shortcomings - it always sucks to realise something you loved as a child is actually kind of shitty.</p>",
    );

    var p2 = new Array(
        "<p> The baseline level of sexualisation that I’ve all but become numb to after a lifetime of existing as a female is overshadowed by an alarming trend in these games towards the overtly explicit. What is ostensibly presented as a safe space for young girls hides a darker element of content that cannot even mask itself as marginally appropriate for these audiences. Since this sector of gaming is largely overlooked, there are almost no regulations or standards about what themes and references are acceptable. This has led to a proliferation of inappropriate, explicit, and outright predatory content in recent years, with very little commentary or outcry in response. Numerous games are being created that explore topics such as pregnancy, illness, body shame, and relationships - generally with explicit sexual overtones. A quick search for the key terms ‘surgery games’ on <a href='https://www.dressupwho.com/search.php?q=surgery' target='_blank'>dressupwho.com</a> yields at least 75 different games which are meant to simulate performing invasive, generally cosmetic, surgeries. On the front page of the same site is a game titled <a href='https://www.dressupwho.com/games/nurse-kissing/' target='_blank'>'Nurse Kissing'</a> (one of 216 results for the key term ‘kissing’). Its description begins: “This patient’s adrenaline levels are a bit too low, but our skilful nurse knows how to raise them without any meds. She’s spreading this kissing practice across handsome patients, but she’s not allowed to”, and the thumbnail prominently features the cleavage of said healthcare professional. These games are spread all over the internet, are free to play, and inexpensive to publish. There’s little recourse for eliminating the issue as it stands, because even if a game is removed from one website, a clone can easily be uploaded elsewhere. </p>",
        "<p>While I wasn’t making the conscious decision to not play the same games as my brothers specifically because I was a girl, I was definitely aware that these games were for boys. Maybe that’s what inspired me one boring summer, sitting cross legged on the lopsided office chair in front of the family computer, to search for something that I’d actually have any interest in playing. Meticulously tapping out each letter into google: 'Games for Girls' \n And I got exactly what I wanted. Pages upon pages of identical games, all tweaked slightly to fit a different niche. Beaming girls with endless wardrobes, ready and waiting for me to design their fantasy lives through style.</p>",
        "<p>In the early days, game development was a field where nobody had any experience or expertise yet, so everyone was stumbling around in the dark, putting out as many games as they could, hoping to bump into a money-maker. More often what they found were games like E.T for the Atari (made in just six weeks and famously considered the worst video games of all time), and Eggomania (a rip-off of a rip-off, and funded by Quaker Oats). Consumers were getting fed up with the flood of low-quality games, and so they just started spending their money elsewhere, resulting in a crash of the video games market in 1983. It seemed like this whole ‘video-ed game’ fad was about to blow over, going the way of jello salads and the blue light disco.</p>",
        "<p>The companies that were able to pick themselves out of the ashes following the decimation of the video gaming industry realised that in order to bounce back, they needed to differentiate their brands, and narrow down a target audience. They decided that this audience was boys. \n By the time the industry had recovered to the point that they were looking to re-broaden their demographic horizons, the stereotype was well established. And now the marketers had a new problem to solve. These pesky girls just aren’t interested in playing video games. \n The ingenious solution to the problem of girls not spending enough money on games was to just create a new genre of game, one that would cater to the feminine wiles of this elusive audience. This new market became known as the ‘pink game’ - because of course the clearest way to indicate that these games were for girls was to package them in pink. It was a neat and simple overflow from the toy aisles full of Barbies and baby dolls. In fact, Barbie Fashion Designer (create an outfit, print it out, and put it on your real-life Barbie!) was one of the first and most massively commercially successful dress-up based videogames in the west.</p> <p><button id= 'theme_btn' class='button2'>Just like these other toys intended for female audiences, pink games tend to reinforce traditional views of femininity and girlhood, and restrict modes of play to fit gendered stereotypes.</button></p><div id=theme_p><p>Common themes and focuses are fashion and beauty.</p></div>",
        "<p>One of the more immediately critique-able issues with the dress up subset of pink games is the way they blatantly reinforce damaging beauty standards and ideals. By their very nature these games hyper-fixate on the body and appearance. It’s a further reinforcement of the messaging and imagery that girls are battered with on basically every front, telling them what a woman is supposed to look like. Unsurprisingly, but yet still unfortunately, with game titles like 'perfect girl creator', 'being pretty bride', and 'rich girls mall shopping', dress up games aren’t exactly subverting many of these stereotypes. A vast majority of the games feature characters who are thin, white, and have Eurocentric features. The entire point of the game is to make them even more beautiful: cover non-existent imperfections with barely-there makeup, effortlessly switch between complicated hairstyles and curate their outfits from a vast array of fashionable and perfectly fitting clothes.</p><p>The representation of female bodies and promotion of harmful beauty standard in dress up games may just be an easy extension of the precedent set by the likes of Barbie (not to mention much broader societally rooted prejudices), but that doesn’t make it excusable, and doesn’t diminish the real impact it has on young and impressionable audiences.</p>",
        "<p> The negative effects are particularly potent in the context of games where the greatest appeal is arguably self-projection and exploration. Girls are actively encouraged to insert themselves into these games, creating an idealised stand in for themselves and their lives. It’s pretty clear why this is awful for most players, who will never meet the standards being set by the game, and for whom there are no tools to realistically represent themselves. This makes gaming an even more isolating experience for these audiences.	It was in the context of playing dress up games that I probably first encountered the strain of the ‘I want to be her / befriend her / be-girlfriend her’ trichotomy. </p>",
        "<p>It’s worth mentioning that the state of affairs has improved somewhat in recent years. Especially for games which are associated with established properties such as <a href='http://barbiegirls.com/' target='_blank'>Mattel</a>, an effort is made to include at least a token range of skin tones, and in the better ones body shapes, hair types, and gender expressions too. But these efforts are yet to pervade into the vast majority of dress up games</p><p><button class='button2' id='body_btn'>white and thin is still the default, and if any other options are included, they are there as a deviance.</button></p><p> At the moment Disney princesses reign supreme as the most popular base design for dolls. The games fly under the litigation radar by simply rebranding their characters with untraceable names like <a href='https://www.girlsplay.com/eliza-games.html' target='_blank'>'Ice Princess Eliza' and 'Long Hair Rachel'</a>. This is a poor starting point, since it’s not much of a secret that the roster of princess is still rather lacking in the inclusion department. This is then compounded by design ‘enhancements' that see waists cinched in, busts rounded out, and outfit selections that would make The Mouse blush.</p>",
        "<p><a href='https://vhil.stanford.edu/mm/2013/fox-chb-sexualized-virtual-selves.pdf' target='_blank'>A 2013 Stanford study</a> highlights the significant relationship between the way characters are represented in games and offline behaviours and beliefs of players - particularly for games where users are encouraged to embody these character as a proxy for themselves. The study hypothesises that a combination of the Proteus effect, wherein people infer their own attitudes and beliefs by observing their behaviours in the same manner they would observe another person, and objectification theory, wherein women are socialised to recognise themselves as depersonalised objects to be evaluated based on sexual worth. This leads to women who interact with a sexualised avatar as a representation of themselves being more likely to experience greater self- objectification and body preoccupation; and people of any gender are more likely to have less belief in the cognitive abilities of women in general</p>",
        );

        var p3 = new Array(
            "<p>I’m not willing to let go of the lingering love I have for these games of my childhood. I want to move away from nuance-less arguments of ‘these are bad because they promote [stereotypically feminine interest] and feminine things are inherently bad' and I’m a proponent for large-scale change in how women are treated as both consumers and creators in the gaming industry. I want young girls to have access to good quality games that cater to their interests, without these games being written off as ‘just for girls’. But where this content exists and is being made available for children to access, there’s also a real need for it to become the subject of scrutiny. I keep on running up against these same much broader questions which people much smarter than me have spent much more time trying to solve to no avail. About internet safety, supervision, and censorship. About sexism, sexualisation, and self-expression. About identity, inequality, and feeling inferior.</p><p>My opinions on the ways it sucks to be a young girl online are in no way radical or revolutionary. Online dress up games were one of the few spaces I encountered as a child that actively highlighted and celebrated femininity. But surely there’s a way to do so that isn’t so overtly damaging. I don’t have any sudden desire to start joining my brother for games of Halo. I often still prefer watching to playing, with YouTube walkthroughs now serving to fill my fix of the latest releases. I’m in awe of some of the amazing work being generated by an ever-diversifying pool of developers, especially now I better understand how much effort goes in to the back end of a game, and I’m excited for these ideas and standards to start trickling into the mainstream. I suppose that all I can hope, as the old and bitter twenty-something that I am is that the next young girl who decides to type in ‘games for girls’ gets some better options.</p>",
            "<p>It's become something of a given that most major games these days are going to incorporate at least some element of character creation. The praise given to games like <a href='https://guides.gamepressure.com/blackdesert/guide.asp?ID=34577' target='_blank'>Black Desert Online</a>  and the <a href='https://saintsrow.fandom.com/wiki/Player_Customization' target='_blank'>Saints Row</a> series for their advanced character creation systems indicates a desire in the community for games that emphasise character design. After all, if you’re going to be sieging castles and gunning down rival gangs, you want to be doing it in style. </p>",
            "<p>But it’s the sieging and the gunning that’s still the most important part. It’s not really gaming if you’re designing a character for the sake of tending to a farm, calmly solving puzzles, or - worst of all - just for the sake of creating. My mother completes levels of the Two Dots app faster than they can release them. My grandmother was at one point paying subscriptions to three separate word puzzle games. Since the days of wreaking havoc on my sister’s save files I’ve spent more time and money on the Sims franchise than I’m ever going to be willing to publicly admit.</p> <p>None of us are gamers though. Not in the same way that my brother, with his well insulated man cave and light-up mechanical keyboard is. Not in the same way that my father, who hasn’t touched a console in years and who has to squint to see his phone screen, is. They better fit the carefully cultivated cultural image of what a prototypical ‘gamer’ is.</p>",
            "<p>Because I’m the kind of person that’s dangerous when faced with too much free time, I sat down and watched an hour long YouTube compilation of ‘classic’ video game ads from the 80s. Over the duration of this hour I counted men and boys being depicted either playing a game or as the main character of a game 120 times, three women lovingly staring over the shoulders of their husband as he played, nineteen girls actually picking up the controller, and one particularly talented gaming dog.</p>",
            "<p>A big part of geek and gamer culture is maintaining a reverence for nostalgia and childhood experiences - but only insofar as those experiences are male ones. The legacy of ‘retro games’ (think <a href='https://en.wikipedia.org/wiki/Street_Fighter' target='_blank'>Streetfighter</a> and <a href='https://en.wikipedia.org/wiki/Tomb_Raider' target='_blank'>Tomb Raider</a>), made in times when the gender divide was even more stark, are widely referenced and respected. The games of my childhood, on the other hand, are usually more of a punchline - and my lingering ‘not-like-other-girls’ reflexes tell me to join in with the laughter. Derision of these games as worthless, silly, and uninteresting - usually coming from people well outside the target audience, and without the frame of reference of past experience - fails to address why there then exists such a large and persistent market for them, and ignores the many valid avenues of criticism, not making any calls for growth or for change.</p>",
            "<p> The other major gaming touchstone I had in primary school was the veritable behemoth that was the cool math game. What was a blessed diversion under the guise of learning for my classmates was a source of endless frustration for me.  I couldn’t figure them out. I didn’t have the hand-eye co-ordination nor the timing to execute the moves. The flashing colours, fast movement, and sudden pressure froze even the simplest of equations or strategies in my brain. I wasn’t getting the highest score on my first try, which to me was the same thing as a failure. It didn’t take long for me to decide that I was just no good at gaming, nor was I any good at math. Both of these decisions were still tightly wound into my sense of self all the way to university.</p>",
            "<p>It’s nothing new that the tech industry, and the games industry in particular,  is a hostile place for women and girls. Women are marginalised in gaming spaces, and expressions of femininity are outright rejected. I associate my first experiences with technology - and the subsequently dominant role it’s played in my life - pretty heavily with sites like girlgogames.com. These games served to ease me into the cold and inaccessible world of computers, and made me realise that my love for art and aesthetics could indeed flourish within the STEM fields I was being pushed towards.I wanted to be able to make games like the ones I was playing, and it’s a desire that clearly hasn’t faded all that much with time. But now that I reside more fully in the world of technology I often feel the pressure to put away my feminine things, or else risk being defined by them. Before I walk into a new class, or prepare for a job interview, there’s always a moment where I think about how I’m going to position myself to indicate that I do in fact know how to turn a computer on, and that I’m worth being taken seriously despite my gender presentation. I’ve had a presumed friend tell me to my face that I only got my scholarship because I’m a girl, and that it’s a shame that guys like him will never get the scholarships they deserve because of charity cases like me. (For the record, I got the scholarship for coming from a town in the middle of nowhere. There was no gender requirement to apply).</p>",
            "<p>At some point on the other side of getting out of the small town I was raised in, I pivoted. Being girly was no longer the ultimate sin. It was the ticket to success.</p> <p><button class='button2' id='m_u_btn'>If I was going to be female I had to be the most female possible, and I had to be flawless.</button></p><p> The weight was solely on my shoulders to prove that you could be both feminine and intelligent. I’d show up to my 9 a.m database tutorials with straightened hair and a ludicrous shade of lipstick on. By the end of the class I’d be swathed in the neutral blue of a toilet stall, doing my best to reschedule the impending panic attack. I hadn’t answered enough questions in class. My skirt didn’t sit right around my waist. Everyone totally thought I was dumb now.  And I still wasn’t pretty enough to make up for it. ",
            "<p>Parents tend to be made well aware of the dangers that (may or may not actually) exist when exposing a child to violent video games - i.e. ‘real’ videogames, the ones that girls don’t play. There have been psychological studies on potential long-term impacts, and widespread age-restrictions and content warnings have been implemented. Even in the wild west of free online browser games there’s an understanding that you should monitor what your child accesses for violent or aggressive gameplay. There’s no real comparable awareness for the disgusting content cropping up on girls games sites. These deeply troubling games are masked by a pink fog and overlooked based on the assumption that they’re just simple silly games about princesses made for girls. How bad could they be, really?</p>",
        );



    
var mtvns= new Array(
    "<p> Maybe it was the sparkly effects and bright pink colour scheme.</p>",
    "<p>Maybe it was the upbeat music and illusion of creative choice.</p>",
    "<p>Maybe it was the only real option I had for a peaceful gaming experience that was both conflict and consequence free</p>",
    "<p>Maybe it was a way to express myself, and explore my identity and appearance in a way that my small town and body type weren’t particularly accommodating of.</p>",
    "<p>Maybe it was an early manifestation of my desire to look at pretty, scantily-clad women online.</p>",

);

var thms = new Array(
    "<p>Common themes and focuses are fashion and beauty.</p>",
    "<p>Common themes and focuses are marriage and motherhood.</p>",
    "<p>Common themes and focuses are cooking and housekeeping. </p>",
    "<p> Common themes and focuses are shopping and sleepovers.</p>",
)