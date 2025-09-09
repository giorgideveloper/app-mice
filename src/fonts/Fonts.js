import localFont from 'next/font/local';

 export const firago = localFont({
    src: [
        {
            path: './firago/FiraGO-Regular.otf',
            weight: '400',
            style: 'normal',
        },
          {
            path: './firago/FiraGO-SemiBold.otf',
            weight: '500',
            style: 'medium',
        },
         {
            path: './firago/FiraGO-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
}); 

export const arialCaps = localFont({
    src: [
        {
            path: './arialcaps/bpg-arial-caps-webfont.ttf',
            weight: '400',
            style: 'normal',
        },
        
    ],
})

export const party = localFont({
    src: [
        {
            path: './party/Party-Confetti.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
})