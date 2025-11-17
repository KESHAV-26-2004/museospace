// data.js — Hybrid Mode with shortNote (1/3 length) + full curatorNotes

const artworks = [

  /* ----------------------------------------------------
     RENAISSANCE (1–6)
     ---------------------------------------------------- */

  {
    id: 1,
    title: "Madonna of the Golden Dawn",
    artist: "Florentine School",
    year: 1468,
    medium: "Tempera on panel",
    shortNote: "A warm devotional scene blending gold leaf radiance with gentle early Renaissance naturalism.",
    curatorNotes: "Rendered in the warm, luminous style of late 15th-century Florence, this devotional piece reflects the emerging shift from strict iconography to more naturalistic human tenderness. The Madonna’s gentle tilt and the child’s subtle gesture suggest an intimate emotional bond, while the underlying gold-leaf tones evoke divine radiance. Such works were often intended for private chapels, offering comfort and spiritual contemplation to those who prayed before them.",
    img: "assets/page2/Renaissance-1.jpg"
  },

  {
    id: 2,
    title: "Portrait of a Courtly Noblewoman",
    artist: "Venetian Atelier",
    year: 1482,
    medium: "Oil on panel",
    shortNote: "A refined Venetian portrait emphasizing poise, luxury textiles, and aristocratic elegance.",
    curatorNotes: "This portrait showcases the emerging Venetian fascination with soft light, refined fabrics, and aristocratic beauty. The sitter’s composed elegance, enhanced by the subtle interplay of shadow and saturated color, reflects the cultural shift toward individual identity and status. Her attire, rich with symbolic patterns, signals both wealth and cultural sophistication. Such portraits often served as statements of lineage, refinement, and political alliances within noble families.",
    img: "assets/page2/Renaissance-2.jpg"
  },

  {
    id: 3,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503,
    medium: "Oil on poplar panel",
    shortNote: "Leonardo’s legendary portrait known for its subtle emotion and groundbreaking sfumato effects.",
    curatorNotes: "Leonardo’s masterpiece is celebrated not only for its enigmatic smile but for its revolutionary blending of atmospheric landscape, delicate sfumato shading, and subtle human emotion. The horizon lines behind her shift on each side, echoing the mystery of her expression. The painting’s psychological depth was unprecedented in portraiture, revealing an inner life that makes the viewer almost feel observed rather than observer.",
    img: "assets/page2/Renaissance-3.jpg"
  },

  {
    id: 4,
    title: "Study for the Creation of Adam",
    artist: "Workshop of Michelangelo",
    year: 1492,
    medium: "Chalk & fresco study",
    shortNote: "A dynamic preparatory study highlighting anatomical energy and early Sistine concepts.",
    curatorNotes: "This preparatory study captures the muscular dynamism that Michelangelo perfected in the Sistine Chapel. Broad, powerful strokes outline expressive anatomy, while the faint compositional adjustments hint at the artist’s quest for divine drama. Such workshop studies were essential for planning large fresco cycles, helping refine themes of creation, spiritual vigor, and the heroic potential of humankind.",
    img: "assets/page2/Renaissance-4.jpg"
  },

  {
    id: 5,
    title: "Lady with an Ermine",
    artist: "Leonardo da Vinci",
    year: 1489,
    medium: "Oil on panel",
    shortNote: "A graceful portrait where elegance, symbolism, and psychological depth meet.",
    curatorNotes: "This iconic portrait of Cecilia Gallerani demonstrates Leonardo’s mastery of grace, psychological subtlety, and anatomical precision. The ermine — a symbol of purity, intellect, and noble favor — reinforces her elevated status, possibly alluding to her association with the Duke of Milan. The sitter’s poised rotation reveals a newfound naturalism, suggesting movement, thought, and inner complexity rarely explored in portraiture before Leonardo.",
    img: "assets/page2/Renaissance-5.jpg"
  },

  {
    id: 6,
    title: "The School of Athens",
    artist: "Raphael",
    year: 1510,
    medium: "Fresco",
    shortNote: "Raphael’s grand celebration of classical philosophers and Renaissance humanism.",
    curatorNotes: "Raphael’s iconic celebration of classical philosophy unites the greatest thinkers of antiquity in a single architectural fantasy. Plato and Aristotle stand at the center, embodying opposing yet complementary worldviews. Around them, mathematicians, astronomers, and poets engage in dynamic exchange. The fresco symbolizes the Renaissance devotion to knowledge, harmony, and intellectual rebirth, mirroring the cultural revival flourishing in Rome.",
    img: "assets/page2/Renaissance-6.jpg"
  },

  /* ----------------------------------------------------
     ABSTRACT (7–12)
     ---------------------------------------------------- */

  {
    id: 7,
    title: "Composition VII",
    artist: "Wassily Kandinsky",
    year: 1913,
    medium: "Oil on canvas",
    shortNote: "A swirling symphony of color and movement marking Kandinsky’s peak abstraction.",
    curatorNotes: "Often considered the pinnacle of Kandinsky’s early abstract period, this monumental composition orchestrates layers of chaotic brushwork into an almost symphonic sense of movement. The swirling forms and intersecting rhythms suggest emotional states rather than physical objects. For Kandinsky, color and form were spiritual languages, capable of expressing inner truths beyond representational imagery.",
    img: "assets/page2/Abstract-1.jpg"
  },

  {
    id: 8,
    title: "Broadway Boogie Woogie",
    artist: "Piet Mondrian",
    year: 1943,
    medium: "Oil on canvas",
    shortNote: "Mondrian’s rhythmic grid inspired by New York’s lights and jazz energy.",
    curatorNotes: "Mondrian’s final masterpiece celebrates the energy of Manhattan, translating the grid of city streets and the syncopated beat of jazz into pulsating blocks of primary color. The entire surface vibrates with rhythm, reflecting Mondrian’s belief that abstraction could capture the essential harmony beneath modern life’s apparent chaos.",
    img: "assets/page2/Abstract-2.jpg"
  },

  {
    id: 9,
    title: "Black Square",
    artist: "Kazimir Malevich",
    year: 1915,
    medium: "Oil on canvas",
    shortNote: "A radical declaration of pure abstraction and a reset of artistic language.",
    curatorNotes: "A manifesto of pure abstraction, Malevich’s work dismisses traditional representation in favor of radical simplicity. The square becomes a symbol of the ‘zero point’ in art — a foundational reset from which a new visual language might emerge. Its stark presence continues to challenge notions of meaning, identity, and artistic intention.",
    img: "assets/page2/Abstract-3.jpg"
  },

  {
    id: 10,
    title: "Improvisation 28",
    artist: "Wassily Kandinsky",
    year: 1912,
    medium: "Oil on canvas",
    shortNote: "A musical blend of fluid gestures and early abstraction.",
    curatorNotes: "This transitional work blends traces of recognizable imagery with the fluid gestures that define Kandinsky’s mature abstraction. Influenced by music, the artist described these canvases as visual improvisations, where line and color carry emotional resonance akin to melody and harmony.",
    img: "assets/page2/Abstract-4.jpg"
  },

  {
    id: 11,
    title: "Composition with Red, Blue, and Yellow",
    artist: "Piet Mondrian",
    year: 1930,
    medium: "Oil on canvas",
    shortNote: "A balanced grid masterpiece distilling form to universal harmony.",
    curatorNotes: "Mondrian reduces the world to its essential formal relationships: verticals, horizontals, and primary colors. This disciplined visual purity reflects his belief that abstraction could offer a universal harmony free of cultural or symbolic interpretation. Every line and color block is meticulously balanced, producing a quiet but powerful sense of equilibrium.",
    img: "assets/page2/Abstract-5.jpg"
  },

  {
    id: 12,
    title: "Suprematist Composition",
    artist: "Kazimir Malevich",
    year: 1916,
    medium: "Oil on canvas",
    shortNote: "Geometric shapes floating in pure, weightless Suprematist space.",
    curatorNotes: "Floating geometric forms, freed from earthly reference, embody Malevich’s Suprematist philosophy: art should transcend the physical world and reach pure sensation. The stark diagonals and vibrant blocks convey a sense of infinite space, as though the shapes exist in a weightless dimension beyond gravity and time.",
    img: "assets/page2/Abstract-6.jpg"
  },

  /* ----------------------------------------------------
     MODERN (13–18)
     ---------------------------------------------------- */

  {
    id: 13,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    medium: "Oil on canvas",
    shortNote: "A swirling, emotional night sky painted with Van Gogh’s intense vision.",
    curatorNotes: "Painted during Van Gogh’s time at Saint-Rémy-de-Provence, this masterpiece transforms a quiet night sky into a swirling vision of cosmic turbulence. The stars blaze like whirlpools of light, reflecting Van Gogh’s emotional intensity and vivid imagination. The contrast between the dynamic sky and the peaceful village below creates a haunting poetic tension.",
    img: "assets/page2/Modern-1.jpg"
  },

  {
    id: 14,
    title: "The Scream",
    artist: "Edvard Munch",
    year: 1893,
    medium: "Tempera & pastel on cardboard",
    shortNote: "Munch’s iconic image of existential fear and emotional turbulence.",
    curatorNotes: "Munch’s iconic expressionist work captures the moment when internal anxiety spills irreversibly into external reality. The swirling landscape echoes the figure’s psychic anguish, amplifying the sense of disorientation. More than a personal outcry, the painting has come to symbolize modern humanity’s universal feelings of isolation and existential dread.",
    img: "assets/page2/Modern-2.jpg"
  },

  {
    id: 15,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: 1931,
    medium: "Oil on canvas",
    shortNote: "Dalí’s surreal vision where melting clocks challenge the rigidity of time.",
    curatorNotes: "Dalí’s surrealist landmark juxtaposes hyperrealistic textures with dreamlike distortions. The melting clocks challenge our understanding of time’s rigidity, offering instead a fluid, psychological dimension. Its barren landscape, influenced by Dalí’s childhood memories, reflects both the subconscious mind and the instability of reality itself.",
    img: "assets/page2/Modern-3.jpg"
  },

  {
    id: 16,
    title: "Water Lilies",
    artist: "Claude Monet",
    year: 1906,
    medium: "Oil on canvas",
    shortNote: "A serene exploration of water, reflection, and shifting natural light.",
    curatorNotes: "Part of Monet’s celebrated Giverny series, this work dissolves the boundary between water and sky through shimmering reflections. Monet’s loose brushstrokes and soft color palette create a meditative, almost immersive environment. The series marked a pivotal moment in the evolution toward abstraction, anticipating later explorations of color and perception.",
    img: "assets/page2/Modern-4.jpg"
  },

  {
    id: 17,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: 1665,
    medium: "Oil on canvas",
    shortNote: "A luminous, intimate portrait often called the ‘Mona Lisa of the North.’",
    curatorNotes: "Vermeer’s captivating study of light and gaze transforms a simple portrait into an intimate encounter. The girl’s turned pose suggests immediacy, as though she has just glanced back toward the viewer. Her luminous pearl and the delicate fall of light across her face reveal Vermeer’s unparalleled sensitivity to subtle visual effects.",
    img: "assets/page2/Modern-5.jpg"
  },

  {
    id: 18,
    title: "Guernica",
    artist: "Pablo Picasso",
    year: 1937,
    medium: "Oil on canvas",
    shortNote: "Picasso’s monumental anti-war protest filled with fractured anguish.",
    curatorNotes: "Picasso’s monumental anti-war statement responds to the bombing of the Basque town during the Spanish Civil War. Fragmented figures, distorted proportions, and a stark monochrome palette intensify the horror and chaos of violence. The painting transcends its historical moment to become a universal symbol of human suffering and the senseless brutality of conflict.",
    img: "assets/page2/Modern-6.jpg"
  },

  /* ----------------------------------------------------
     CONTEMPORARY (19–24)
     ---------------------------------------------------- */

  {
    id: 19,
    title: "Spiral Galaxy NGC Capture",
    artist: "NASA / Hubble Observatory",
    year: 2000,
    medium: "Digital telescope imaging",
    shortNote: "A luminous Hubble portrait revealing the vast architecture of a distant galaxy.",
    curatorNotes: "Captured by the Hubble Space Telescope, this radiant spiral galaxy reveals star-forming regions, dust lanes, and cosmic color variations invisible to the naked eye. Such images deepen our understanding of galactic evolution, reminding viewers of humanity’s humble place within the vast architecture of the universe.",
    img: "assets/page2/Contemporary-1.jpg"
  },

  {
    id: 20,
    title: "Field of Atmospheric Echoes",
    artist: "Marena Solari",
    year: 2018,
    medium: "Mixed media on canvas",
    shortNote: "A soft gradient landscape blending memory, atmosphere, and dissolving form.",
    curatorNotes: "Solari’s layered composition dissolves traditional boundaries between landscape and abstraction. Soft pigments interact with transparent washes to create a floating environment reminiscent of shifting weather or distant memory. The work invites slow looking — details emerge gradually, evoking the sensation of observing a horizon through mist.",
    img: "assets/page2/Contemporary-2.jpg"
  },

  {
    id: 21,
    title: "Digital Waveform Study No. 3",
    artist: "Aiden Rho",
    year: 2020,
    medium: "Generative digital art",
    shortNote: "Organic algorithmic waves exploring movement through code-driven curves.",
    curatorNotes: "Created through procedural algorithms, Rho’s piece visualizes rhythmic patterns inspired by ocean currents and sound frequencies. Its flowing lines blur the distinction between nature and machine, suggesting that digital forms can possess their own organic life. The artwork’s evolving curves reflect the beauty hidden within mathematical logic.",
    img: "assets/page2/Contemporary-3.jpg"
  },

  {
    id: 22,
    title: "City Lights: Nocturnal Reflections",
    artist: "Elara Quinn",
    year: 2019,
    medium: "Photography",
    shortNote: "A cinematic nightscape turning urban reflections into glowing color fragments.",
    curatorNotes: "Quinn’s urban nightscape transforms everyday architecture into a shimmering composition of color and reflection. The blurred lights evoke the sensory overload of metropolitan life, capturing both its exhilaration and its fleeting moments of solitude. The photographic abstraction invites viewers to rediscover the beauty embedded within familiar city rhythms.",
    img: "assets/page2/Contemporary-4.jpg"
  },

  {
    id: 23,
    title: "Chromatic Horizon Study",
    artist: "Lysandre Vale",
    year: 2021,
    medium: "Digital painting",
    shortNote: "A quiet gradient meditation exploring the emotional weight of color shifts.",
    curatorNotes: "Vale’s restrained gradient work explores the psychological effects of color transitions. The seamless shift from one hue to another evokes emotional states ranging from calm introspection to rising tension. Such digital studies continue the modernist tradition of examining perception, while embracing the infinite possibilities of contemporary tools.",
    img: "assets/page2/Contemporary-5.jpg"
  },

  {
    id: 24,
    title: "Synthetic Bloom Sequence",
    artist: "Orion Kade",
    year: 2022,
    medium: "Generative art",
    shortNote: "A digital bloom built from evolving algorithmic forms hovering between nature and tech.",
    curatorNotes: "Kade’s algorithmic blossoms unfold like digital organisms, continuously mutating into new configurations. Inspired by biological growth patterns, the work reflects themes of evolution, hybridity, and the emerging aesthetics of artificial life. Its layered forms hover between the organic and the synthetic, suggesting a future where nature and technology merge.",
    img: "assets/page2/Contemporary-6.jpg"
  }

];
