import React from 'react'
import { useNavigate } from 'react-router';

const Pallete = () => {
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    let input = e.target.elements.search.value.trim();

    let first = input.split(" ")[0].toLowerCase();
    let rest = input.split(" ").slice(1).join(" ").trim();

    // ------------------------
    //    OPEN COMMANDS
    // ------------------------
    if (first === "open") {
      const site = rest.toLowerCase();

      const openSites = {
        google: "https://www.google.com/",
        youtube: "https://www.youtube.com/",
        chatgpt: "https://chat.openai.com/",
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        whatsapp: "https://web.whatsapp.com/",
        linkedin: "https://www.linkedin.com/",
        github: "https://github.com/",
        spotify: "https://open.spotify.com/",
        twitter: "https://x.com/",
        amazon: "https://www.amazon.in/",
        flipkart: "https://www.flipkart.com/",
        netflix: "https://www.netflix.com/",
        hotstar: "https://www.hotstar.com/in",
        maps: "https://www.google.com/maps"
      };

      if (openSites[site]) {
        window.location.assign(openSites[site]);
        e.target.reset();
        return;
      }

      // special: open react apps
      if (site === "camera") {
        navigate("/camera");
        e.target.reset();
        return;
      }

    //   if (site === "settings") {
    //     navigate("/settings");
    //     e.target.reset();
    //     return;
    //   }

    //   if (site === "calculator") {
    //     navigate("/calculator");
    //     e.target.reset();
    //     return;
    //   }

      e.target.reset();
      return;
    }

    // ----------------------------
    //   WIKIPEDIA SEARCH
    // ----------------------------
    if (first === "wiki" || first === "wikipedia") {
      let url = `https://en.wikipedia.org/wiki/${encodeURIComponent(rest)}`;
      window.location.assign(url);
      e.target.reset();
      return;
    }

    // ----------------------------
    //   YOUTUBE SEARCH
    // ----------------------------
    if (first === "yt" || first === "youtube") {
      let url = `https://www.youtube.com/results?search_query=${encodeURIComponent(rest)}`;
      window.location.assign(url);
      e.target.reset();
      return;
    }

    // ----------------------------
    //   WEATHER SEARCH
    // ----------------------------
    if (first === "weather") {
      let url = `https://www.google.com/search?q=weather+${encodeURIComponent(rest)}`;
      window.location.assign(url);
      e.target.reset();
      return;
    }

    // ----------------------------
    //   MAP SEARCH
    // ----------------------------
    if (first === "map" || first === "maps") {
      let url = `https://www.google.com/maps/search/${encodeURIComponent(rest)}`;
      window.location.assign(url);
      e.target.reset();
      return;
    }

    // ----------------------------
    //    MATH CALCULATOR
    // ----------------------------
    if (first === "calc" || first === "calculate") {
      try {
        let result = eval(rest); // basic calculator
        alert(`Result: ${result}`);
      } catch {
        alert("Invalid equation!");
      }
      e.target.reset();
      return;
    }

    // ----------------------------
    // FALLBACK → GOOGLE SEARCH
    // ----------------------------
    let fallback = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    window.location.assign(fallback);
    e.target.reset();
  };

  return (
    <div
      className="palette 
         fixed top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2
         z-[1000] bg-[rgba(248,246,242,0.431)]
         h-[8%] w-[50%] mt-[10%]
         rounded-[15px] backdrop-blur-[1px]"
    >
      <form
        onSubmit={onSubmit}
        className="h-full w-full border border-white rounded-[15px]
           flex items-center px-[8px] gap-[2px]"
      >
        <i className="ri-search-line text-[1.6rem] font-medium text-[rgba(0,0,0,0.455)]"></i>

        <input
          type="text"
          name="search"
          placeholder="Spotlight Search..."
          className="flex-1 h-[90%] bg-transparent px-[8px] py-[10px]
             text-[1.4rem] font-medium border-none outline-none text-white
             placeholder:text-[rgba(0,0,0,0.404)]"
        />
      </form>
    </div>
  );
};

export default Pallete