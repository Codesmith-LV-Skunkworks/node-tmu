task :default => [:deps, :test]

desc "Run all tests"
task :test do
  sh "PORT=4000 node_modules/.bin/vows src-test/* --spec"
end

desc "Update dependencies"
task :deps do
  sh "sudo puppet apply puppet/deps.pp"
end
