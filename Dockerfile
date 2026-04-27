# 1. Use a Linux computer that already has Node.js installed
FROM node:18-bullseye

# 2. Install the Linux version of LaTeX (TeX Live)
RUN apt-get update && apt-get install -y \
    texlive-latex-base \
    texlive-fonts-recommended \
    texlive-fonts-extra \
    texlive-latex-extra \
    && rm -rf /var/lib/apt/lists/*

# 3. Create a folder for our app inside the cloud computer
WORKDIR /app

# 4. Copy our package list and install our node modules
COPY package*.json ./
RUN npm install

# 5. Copy all our remaining files (HTML, JS, server.js) into the cloud computer
COPY . .

# 6. Expose the port so the internet can see it
EXPOSE 3000

# 7. The command to start the app
CMD ["node", "server.js"]