# Component Structure 
    Landing Page (/)
        Route: /About

    /About
    Header
    
    Skills Header
        (Update State) Programming
        (Update State) Digital Media
        (Update State) eCommerce

    Work Experience 
        Epic Summary
            (Route) Epic info
        Visa Summary
            (Route) Visa info

    Additional Experience
        (Update State) eCommerce
        (Update State) Entertainment

    Education
        Edu Marketing
        Edu Programming

    Contact 
        Ext. Link (x4)

    Site Nav 
        (Route) Landing Page
        (Route) VISA Info
        (Route) Epic Info 

    Spotify Embed 

    Footer

# Data Handling
- URL manipulation performed with React Router library within application. External links are implemented with standard <a> tags. 

- Pop ups implemented with component-level state changes. 

- Content mapped from data model contained in src/assets/data/skills.js

# Branding Legend
 
	font-family: 'IBM Plex Sans', sans-serif; -- Regular 400 -- subheaders / section headers

	font-family: 'Kumbh Sans', sans-serif; -- Bold 700 -- main titles / section headers

	font-family: 'Recursive', sans-serif; -- light 300 + regular 400 -- body text

    font-family: 'Libre Barcode 39 Text', cursive; -- logo TM
	
  color theme: 
	black -- 0B1210
	washed olive -- 595E4A
	grey -- 6B7A65
	green -- 508D6A
	white -- F9F7E8 -- use for site background

## branding update
    color theme: 
        blood orange -- #e33d26
        washed orange -- #ebc2bd
        blue -- #263c6d
        washed violet -- #e4dce4
        washed blue -- #c4e4ec

# Enhancement List
- truncate header paragraph and implement "read more" popup on /About page 
- implement behance API integration
- project gallery with behance page embed

# Fix List 
- responsive issue @ 1512px on techical skills section on /About page 
    - resolved

- hide photo @ 800px to solve overlapping issues with responsive sizing on the header 
    - resolved

- visual overlapping with header on VISA about page
    - remove project link, or alreast simplify. 
    - resolved 

- update header image, as well as branding colors on the site. \
    - resolved

