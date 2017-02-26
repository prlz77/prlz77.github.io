bundle exec jekyll build
mv _site ../
git checkout master
ls
echo "These files will be removed, sure? crtl+c to abort"
read
rm -r ./*
cp -rf ../_site/* ./
rm -r ../_site
