// commands/st.js

// Fonction pour convertir du texte normal en police grasse Unicode

function toBold(text) {

    const map = {

        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠',

        'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧',

        'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮',

        'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',

        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆',

        'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍',

        'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔',

        'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',

        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒',

        '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',

        ' ': ' ', ',': ',', '.': '.', '-': '−', 'é': '𝐞́', 'è': '𝐞̀', 'ê': '𝐞̂'

    };

    return text.split('').map(char => map[char] || char).join('');

}

export default async function stCommand(client, message, args) {

    const remoteJid = message.key.remoteJid;

    const fullText = args.join(" ").trim();

    if (!fullText) {

        await client.sendMessage(remoteJid, { 

            text: `🌟 *NOUVEAU STICKER PACK*

Utilisation : *.st Anime, Perso, Style, Chaîne*

Exemple : *.st Naruto Shippuden, Borushiki, Rapide, Dodo*

> © 𝐀𝐊𝐀𝐍𝐄 𝐊𝐔𝐑𝐎𝐆𝐀𝐖𝐀 🌹` 

        });

        return;

    }

    // Séparation par virgule

    const parts = fullText.split(",").map(p => p.trim());

    const anime  = toBold(parts[0] || "Non spécifié");

    const perso  = toBold(parts[1] || "Non spécifié");

    const style  = toBold(parts[2] || "Non spécifié");

    const chaine = toBold(parts[3] || "Dodo");

    // Toute la présentation en police grasse

    const presentation = `╔══❖ 𝐍𝐄𝐖 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐏𝐀𝐂𝐊 ❖══╗

🌟 ..... 🌟

(ミ★‿★彡)

📺 𝐀𝐍𝐈𝐌𝐄 : ${anime}

🎭 𝐏𝐄𝐑𝐒𝐎 : ${perso}

✨ 𝐒𝐓𝐘𝐋𝐄 : ${style}

🍁 𝐂𝐇𝐀𝐈̂𝐍𝐄 : ${chaine}

╚══❖═══✦═══❖══╝

> © 𝐀𝐊𝐀𝐍𝐄 𝐊𝐔𝐑𝐎𝐆𝐀𝐖𝐀 🌹`;

    try {

        await client.sendMessage(remoteJid, { text: presentation });

    } catch (error) {

        console.error("Erreur .st :", error);

        await client.sendMessage(remoteJid, { text: "❌ Erreur lors de la création du pack." });

    }

}