require "rubygems"
require 'rake'
require 'yaml'
require 'time'

namespace 'travis' do
  SOURCE_BRANCH = 'dev'
  DEPLOY_BRANCH = 'master'
  REPORT_BRANCH = 'report'

  VERSION_URL = 'https://pages.github.com/versions.json'

  

  desc 'Publish site to GitHub Pages from Travis'
  task :deploy do
    
    if ENV['TRAVIS_TEST_RESULT'].to_i != 0
      puts "Skipping deployment due to test failure"
      next
    end
    
    if ENV['TRAVIS_PULL_REQUEST'] != "false" or ENV['TRAVIS_BRANCH'] != SOURCE_BRANCH
      puts "Skipping deployment from #{ENV['TRAVIS_BRANCH']}"
      if ENV['TRAVIS_PULL_REQUEST'] != "false"
          puts "This brach is pull request."
      end
      next
    end
      
    
    repo = %x(git config remote.origin.url).gsub(/^git:/, 'https:')
    system "git remote set-url --push origin #{repo}"
    system 'git config credential.helper "store --file=.git/credentials"'
    File.open('.git/credentials', 'w') do |f|
      f.write("https://#{ENV['GH_TOKEN']}:x-oauth-basic@github.com")
    end

    puts "Deploying from #{SOURCE_BRANCH} to #{DEPLOY_BRANCH}"
    deployed = system "git push origin #{SOURCE_BRANCH}:#{DEPLOY_BRANCH}"
    puts "Deployed: #{deployed}"

    File.delete '.git/credentials'

    if not deployed
      exit 1
    end
  end


  desc 'save report to GitHub from Travis'
  task :report do

    repo = %x(git config remote.origin.url).gsub(/^git:/, 'https:')
    system "git remote set-url --push origin #{repo}"
    system 'git config credential.helper "store --file=.git/credentials"'
    File.open('.git/credentials', 'w') do |f|
      f.write("https://#{ENV['GH_TOKEN']}:x-oauth-basic@github.com")
    end

    puts "Report from #{SOURCE_BRANCH} to #{REPORT_BRANCH} add files to 'tests/galen/reports/all'"
        system "git config --global user.email 'pashades@gmail.com'"
                system "git config --global user.name 'akmil' "
        system "git config --global push.default upstream"

        puts "********* show-ref *************"
        system "git show-ref"
        puts "********* fetch --all *************"
        system "git fetch --all"
        puts "********* try show-branch *************"
        system "git show-branch --all"

        system "git add tests/galen"
        system "git checkout origin #{REPORT_BRANCH}"
        system "git status"
        system "git show-ref"
        puts "********* commit *************"
        system "git commit --allow-empty -m 'Auto-Report from Travis #{Time.now.utc.to_s}'"
        system "git show-ref"


        puts "********* try checkout *************"
        system "git checkout #{REPORT_BRANCH}"
        system "git commit --allow-empty -m 'Auto-Report #{Time.now.utc.to_s}'"
        puts "********* PUSH END *************"

    reported = system "git push -u -f origin #{REPORT_BRANCH}"

    puts "Reported: #{reported}"
    puts "Reported-time(at UTC=+0000): #{Time.now.utc.to_s}"

    File.delete '.git/credentials'

    if not reported
      exit 1
    end
  end

end