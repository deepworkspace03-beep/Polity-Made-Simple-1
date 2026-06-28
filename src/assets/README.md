# assets/

Put your images here (logo, profile photo, banners, etc.).

## Using a real profile photo

1. Add your image to this folder, e.g. `profile.jpg`.
2. Open `src/components/About.tsx`.
3. At the top, add:  `import profile from "../assets/profile.jpg";`
4. Replace the placeholder circle `<div>` with:

   ```tsx
   <img
     src={profile}
     alt="Profile"
     className="mx-auto h-24 w-24 rounded-full object-cover"
   />
   ```

That's it — Vite handles the image import automatically.
